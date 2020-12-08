import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Community } from '../../../models/new_communities';

import { CommunityService } from '../../services/community.service';
import Swal from 'sweetalert2';
import { JoinUserService } from '../../services/join-user.service';
import { PostsService } from '../../services/posts.service';

interface HtmlInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

@Component({
    selector: 'app-community-detail',
    templateUrl: './community-detail.component.html',
    styleUrls: ['./community-detail.component.scss'],
})
export class CommunityDetailComponent implements OnInit {
    id: number;
    communities: Community;
    community;
    file: File;
    photoSelected: string | ArrayBuffer;
    edit: boolean = false;
    error;
    activitySelect = 1;
    profile;
    dataUser;

    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router,
        public communityService: CommunityService,
        public joinuserService: JoinUserService,
        public postsService: PostsService
    ) {}

    ngOnInit(): void {
        this.dataUser = localStorage.getItem('dataUser');
        this.getCommunityDetail();
        this.getAllJoinUsers();
        this.getProfile(this.dataUser);
    }

    guardar() {
        Swal.fire({
            icon: 'success',
            title: 'gracias',
            showConfirmButton: true,
        }).then(function () {
            console.log('Se hizo clic en el botón Aceptar.');
        });
    }

    getCommunityDetail() {
        this.activateRoute.params.subscribe((params: Params) => {
            this.id = params['id'];
            this.communityService.getCommunity(this.id).subscribe(
                (res) => {
                    this.community = res;
                    console.log(this.community);
                },
                (err) => console.log(err)
            );
        });
    }
    editCommunityView(view: boolean) {
        this.edit = view;
    }

    editCommunity(id, name, description): boolean {
        this.communityService
            .updateCommunity(
                id,
                name.value,
                description.value,
                this.file,
                localStorage.getItem('dataUser'),
                this.activitySelect
            )
            .subscribe(
                (res) => {
                    this.guardar();
                    this.edit = false;
                    this.getCommunityDetail();
                },
                (err) => {
                    this.error = {
                        message: 'Imagen requerida',
                    };
                    console.log(err);
                    this.getCommunityDetail();
                    this.edit = true;
                    console.log(this.error);
                }
            );
        return false;
        // this.router.navigate(['/comunidad/crear-comunidades']);
    }

    deleteCommunity(id: number) {
        const res = confirm('Estas seguro de querer eliminarlo');
        if (res) {
            this.communityService.deleteCommunity(id).subscribe(
                (res) => {
                    console.log(res);
                    this.router.navigate(['/comunidad']);
                },
                (err) => {
                    console.log(err);
                }
            );
        }
    }

    onPhotoSelected(event: HtmlInputEvent): void {
        if (event.target.files && event.target.files[0]) {
            this.file = <File>event.target.files[0];
            // image preview
            const reader = new FileReader();
            reader.onload = (e) => (this.photoSelected = reader.result);
            reader.readAsDataURL(this.file);
        }
    }

    selectActivity(e) {
        this.activitySelect = parseInt(e.target.value);
    }

    // Profiles

    getProfile(user_id: number) {
        this.postsService.getProfile(user_id).subscribe(
            (res) => {
                this.profile = res;
            },
            (err) => {
                console.log(err);
            }
        );
    }

    // JoinUser

    getAllJoinUsers() {
        this.joinuserService.getAllJoinUser().subscribe(
            (res) => {
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    getJoinUser(id: number) {
        this.joinuserService.getJoinUser(id).subscribe(
            (res) => {
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    addJoinUser(communityId, profileId) {
        console.log(profileId);
        console.log(communityId);
        this.joinuserService.createJoinUser(communityId, profileId).subscribe(
            (res) => {
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    deleteJoinUser(id: number) {
        this.joinuserService.deleteJoinUser(id).subscribe(
            (res) => {
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        );
    }
}

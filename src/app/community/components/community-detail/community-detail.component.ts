import {
    Component,
    OnInit,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Community } from '../../../models/new_communities';

import { CommunityService } from '../../services/community.service';
import Swal from 'sweetalert2';
import { JoinUserService } from '../../services/join-user.service';
import { PostsService } from '../../services/posts.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface HtmlInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

@Component({
    selector: 'app-community-detail',
    templateUrl: './community-detail.component.html',
    styleUrls: ['./community-detail.component.scss'],
})
export class CommunityDetailComponent implements OnInit, OnDestroy {
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
    validateJoin: boolean = false;
    validateData;
    filterCommunity;
    editCommunityAdmin: boolean = false;
    private unsubscribe = new Subject<void>();
    joinUsers;

    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router,
        public communityService: CommunityService,
        public joinuserService: JoinUserService,
        public postsService: PostsService
    ) {
        this.dataUser = localStorage.getItem('dataUser');
        this.getProfile(this.dataUser);
        this.getCommunityDetail();
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.getAllJoinUsers();
        }, 500);
    }

    guardar() {
        Swal.fire({
            icon: 'success',
            title: 'Cambios actualizados exitosamente',
            showConfirmButton: true,
        }).then(function () {
            console.log('Se hizo clic en el botón Aceptar.');
        });
    }

    async getCommunityDetail() {
        await this.activateRoute.params
            .pipe(takeUntil(this.unsubscribe))
            .subscribe((params: Params) => {
                this.id = params['id'];
                this.communityService
                    .getCommunity(this.id)
                    .pipe(takeUntil(this.unsubscribe))
                    .subscribe(
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
    editCommunity(
        name: HTMLInputElement,
        description: HTMLTextAreaElement,
        id: number
    ): boolean {
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

    async getProfile(user_id) {
        await this.postsService
            .getProfile(user_id)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                (res) => {
                    this.profile = res;
                },
                (err) => {
                    console.log(err);
                }
            );
    }

    validateProfileAdmin() {
        if (this.community.profile.id === this.profile.id) {
            this.editCommunityAdmin = true;
        } else {
            this.editCommunityAdmin = false;
        }
        this.filterCommunity = this.joinUsers.filter((item) => {
            return (
                item.community === this.community.id &&
                item.profile.id === this.profile.id
            );
        });
        if (this.filterCommunity.length) {
            this.validateJoin = true;
        } else {
            this.validateJoin = false;
        }
    }

    // JoinUser

    async getAllJoinUsers() {
        await this.joinuserService
            .getAllJoinUser()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                (res) => {
                    this.joinUsers = res;
                    this.validateProfileAdmin();
                    console.log(this.joinUsers);
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
        this.joinuserService.createJoinUser(communityId, profileId).subscribe(
            (res) => {
                console.log(res);
                this.getCommunityDetail();
                this.getProfile(this.dataUser);
                this.getAllJoinUsers();
            },
            (err) => {
                console.log(err);
            }
        );
        this.joinuserService.createEmail(this.profile.email).subscribe(
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
                this.getCommunityDetail();
                this.getProfile(this.dataUser);
                this.validateJoin = false;
                this.getAllJoinUsers();
                // this.validateProfileJoin();
            },
            (err) => {
                console.log(err);
            }
        );
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}

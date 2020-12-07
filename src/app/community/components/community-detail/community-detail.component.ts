import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Community } from '../../../models/new_communities';

import { CommunityService } from '../../services/community.service';
import Swal from 'sweetalert2';

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

    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router,
        public communityService: CommunityService
    ) {}

    ngOnInit(): void {
        this.getCommunityDetail();
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
                localStorage.getItem('dataUser')
            )
            .subscribe(
                (res) => {
                    this.guardar();
                    console.log(res);
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
            console.log(this.file);
            const reader = new FileReader();
            reader.onload = (e) => (this.photoSelected = reader.result);
            reader.readAsDataURL(this.file);
        }
    }
}

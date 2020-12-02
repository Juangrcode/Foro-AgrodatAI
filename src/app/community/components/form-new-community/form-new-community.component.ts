import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Community } from '../../../models/new_communities';
import Swal from 'sweetalert2';

import { CommunityService } from '../../services/community.service';

interface HtmlInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

@Component({
    selector: 'app-form-new-community',
    templateUrl: './form-new-community.component.html',
    styleUrls: ['./form-new-community.component.scss'],
})
export class FormNewCommunityComponent implements OnInit {
    @Input() community: Community; // Enviar  datos
    @Output() communityClicked: EventEmitter<any> = new EventEmitter();

    file: File;
    name;
    description;
    photoSelected: string | ArrayBuffer;

    constructor(public communityService: CommunityService) {}

    ngOnInit(): void {
        this.getAllCommunities();
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

    resetForm(form: NgForm) {
        form.reset();
    }

    getAllCommunities() {
        this.communityService.getAllCommunities().subscribe(
            (res) => {
                this.communityService.communities = res;
            },
            (err) => {
                console.log(err);
            }
        );
    }

    addCommunity(form: NgForm) {
        if (form.value.id) {
            this.communityService.updateCommunity(form.value).subscribe(
                (res) => {
                    console.log(res);
                },
                (err) => {
                    console.log(err);
                }
            );
        } else {
            this.communityService.createCommunity(form.value).subscribe(
                (res) => {
                    console.log('anadir al comunidad ');
                    // this.communityClicked.emit(this.community.id);
                    this.getAllCommunities();
                    form.reset();
                },
                (err) => {
                    console.log(err);
                }
            );
        }
    }

    editCommunity(community: Community) {
        this.communityService.selectedCommunity = community;
    }

    deleteCommunity(id: number) {
        const res = confirm('Estas seguro de querer eliminarlo');
        if (res) {
            this.communityService.deleteCommunity(id).subscribe(
                (res) => {
                    console.log(res);
                    this.getAllCommunities();
                },
                (err) => {
                    console.log(err);
                }
            );
        }
    }

    onPhotoSelected(event: HtmlInputEvent) {
        if (event.target.files && event.target.files[0]) {
            this.file = <File>event.target.files[0];
            // image preview
            const reader = new FileReader();
            reader.onload = (e) => (this.photoSelected = reader.result);
            reader.readAsDataURL(this.file);
        }
    }

    // uploadPhoto(name: HTMLInputElement, description: HTMLTextAreaElement) {
    //     this.communityService
    //         .createPhoto(name.value, description.value, this.file)
    //         .subscribe(
    //             (res) => console.log(res),
    //             (err) => console.log(err)
    //         );
    //     console.log(name.value);
    // }
}

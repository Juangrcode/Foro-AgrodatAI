import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Community } from '../models/new_communities';

import { CommunityService } from '../services/community.service';

@Component({
    selector: 'app-form-new-community',
    templateUrl: './form-new-community.component.html',
    styleUrls: ['./form-new-community.component.scss'],
})
export class FormNewCommunityComponent implements OnInit {
    @Input() community: Community; // Enviar  datos
    @Output() communityClicked: EventEmitter<any> = new EventEmitter();
    constructor(public communityService: CommunityService) {}

    ngOnInit(): void {
        this.getAllCommunities();
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
                    console.log('Esa mrd');
                    this.getAllCommunities();
                },
                (err) => {
                    console.log(err);
                }
            );
        }
    }
}

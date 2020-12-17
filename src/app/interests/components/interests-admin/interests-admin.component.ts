import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InterestsService } from '../../services/interests.service';

@Component({
    selector: 'app-interests-admin',
    templateUrl: './interests-admin.component.html',
    styleUrls: ['./interests-admin.component.scss'],
})
export class InterestsAdminComponent implements OnInit {
    constructor(public interestsService: InterestsService) {}

    ngOnInit(): void {
        this.getAllInterests();
    }

    getAllInterests() {
        this.interestsService.getAllInterests().subscribe(
            (res) => {
                this.interestsService.interests = res;
                console.log(this.interestsService.interests);
            },
            (err) => console.error(err)
        );
    }

    addInterest(form?: NgForm) {
        if (form.value.id) {
            this.interestsService
                .updateInterest(form.value)
                .subscribe((res) => {
                    // this.resetForm(form);
                    this.getAllInterests();
                });
        } else {
            this.interestsService
                .createInterest(form.value)
                .subscribe((res) => {
                    this.getAllInterests();
                    // this.resetForm(form);
                });
        }
    }

    editInterest(interest) {
        this.interestsService.selectInterest = interest;
    }

    deleteInterest(id) {
        this.interestsService.deleteInterest(id).subscribe(
            (res) => {
                console.log(res);
                this.getAllInterests();
            },
            (err) => {
                console.log(err);
            }
        );
    }
}

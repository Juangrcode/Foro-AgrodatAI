import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterestsService } from 'src/app/interests/services/interests.service';
import { Interest } from 'src/app/models/interests';
import { AuthService } from 'src/app/services/auth.service';
import { ActivitiesService } from '../../services/activities.service';

@Component({
    selector: 'app-banner-interests',
    templateUrl: './banner-interests.component.html',
    styleUrls: ['./banner-interests.component.scss'],
})
export class BannerInterestsComponent implements OnInit {
    filterInt;
    filterInterests;
    interests;
    temaInteres: Array<any> = [];
    mostrar;

    constructor(
        public interestsService: InterestsService,
        private router: Router,
        public authService: AuthService,
        private activitiesService: ActivitiesService
    ) {}

    ngOnInit(): void {
        this.getAllInterests();
        this.getAllActiities();
    }

    getAllInterests() {
        this.interestsService.getAllInterests().subscribe(
            (res) => {
                console.log(res);
                this.interestsService.interests = res;
                this.temaInteres = this.interestsService.interests;
                this.filterInterests = this.temaInteres.filter((item) => {
                    return item.completed == true;
                });
                console.log(this.filterInterests);
            },
            (err) => console.error(err)
        );
    }

    getAllActiities() {
        this.activitiesService.getAllActivities().subscribe(
            (res) => {
                console.log(res);
                this.activitiesService.activity = res;
                this.filterInt = this.activitiesService.activity.filter(
                    (item) => {
                        this.interests = item.interests.filter((i) => {
                            return i.completed === true;
                        });
                        return this.interests;
                    }
                );
            },
            (err) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        this.router.navigate(['/login']);
                    }
                }
            }
        );
    }

    editInterest(interest: Interest) {
        this.interestsService.selectInterest = interest;
    }

    busqueda(interest) {
        this.editInterest(interest);

        if (interest.completed === false) {
            this.filterInterests[interest.id].completed = true;
            this.interestsService
                .updateInterest(this.filterInterests[interest.id - 1])
                .subscribe(
                    (res) => {
                        console.log(res);
                    },
                    (err) => {
                        console.log(err);
                    }
                );
            return true;
        } else {
            console.log(this.filterInterests);
            this.filterInterests[interest.id - 1].completed = false;
            this.interestsService
                .updateInterest(this.filterInterests[interest.id - 1])
                .subscribe(
                    (res) => {
                        console.log(res);
                    },
                    (err) => {
                        console.log(err);
                    }
                );
            return false;
        }
    }
    seleccion(interest) {
        let valor = this.busqueda(interest);
        if (!interest.completed) {
            this.mostrar = true;
        }
        if (valor === true) {
            this.mostrar = false;
        }
    }
}

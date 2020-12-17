import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Community } from 'src/app/models/new_communities';
import { CommunityService } from '../../services/community.service';
import { InterestsService } from '../../services/interests.service';

@Component({
    selector: 'app-featured-communities',
    templateUrl: './featured-communities.component.html',
    styleUrls: ['./featured-communities.component.scss'],
})
export class FeaturedCommunitiesComponent implements OnInit {
    featureCommunities;
    filterInterests;
    agricola;
    bovino;
    porcino;
    avicola;
    acuicola;
    constructor(
        public communityService: CommunityService,
        public interestsService: InterestsService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.getAllInterests();
        this.getAllCommunities();
    }

    getAllInterests() {
        this.interestsService.getAllInterests().subscribe(
            (res) => {
                this.interestsService.interests = res;
                this.agricola = this.interestsService.interests.filter(
                    (item) => {
                        return item.completed === true;
                    }
                );
                this.bovino = this.interestsService.interests.filter((item) => {
                    return item.activities === 2;
                });
                this.porcino = this.interestsService.interests.filter(
                    (item) => {
                        return item.activities === 3;
                    }
                );
                this.avicola = this.interestsService.interests.filter(
                    (item) => {
                        return item.activities === 4;
                    }
                );
                this.acuicola = this.interestsService.interests.filter(
                    (item) => {
                        return item.activities === 5;
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
    i: number = 0;
    getAllCommunities() {
        this.communityService.getAllCommunities().subscribe(
            (res) => {
                this.communityService.communities = res;
                console.log(this.communityService.communities);
                this.featureCommunities = this.communityService.communities.filter(
                    (item) => {
                        const interests: any[] = item.activity.interests.filter(
                            (i) => {
                                return i.completed === true;
                            }
                        );
                        if (!interests[0]) {
                            const filter = interests.map((i) => {
                                console.log(i.activities);
                                return i.activities;
                            });
                            return item.activity.id === filter;
                        } else {
                            return [];
                        }
                    }
                );
                console.log(this.featureCommunities);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    editCommunity(community: Community) {
        this.communityService.selectedCommunity = community;
        this.router.navigate(['comunidad/crear-comunidades']);
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

    communityDetail(id: number) {
        this.router.navigate(['/comunidad/mis-comunidades', id]);
        console.log('community');
        console.log(id);
        this.communityService.getCommunity(id).subscribe(
            (res) => console.log(res),
            (err) => console.log(err)
        );
    }
}

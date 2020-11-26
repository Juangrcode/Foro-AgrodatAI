import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Community } from '../models/new_communities';

import { CommunityService } from '../services/community.service';

@Component({
    selector: 'app-community-detail',
    templateUrl: './community-detail.component.html',
    styleUrls: ['./community-detail.component.scss'],
})
export class CommunityDetailComponent implements OnInit {
    id: number;
    communities: Community;
    community;

    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router,
        public communityService: CommunityService
    ) {}

    ngOnInit(): void {
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
    editCommunity(community: Community) {
        this.communityService.selectedCommunity = community;
        this.router.navigate(['/comunidad/crear-comunidad']);
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
}

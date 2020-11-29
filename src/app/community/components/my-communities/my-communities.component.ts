import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Community } from 'src/app/models/new_communities';

import { CommunityService } from '../../services/community.service';

@Component({
    selector: 'app-my-communities',
    templateUrl: './my-communities.component.html',
    styleUrls: ['./my-communities.component.scss'],
})
export class MyCommunitiesComponent implements OnInit {
    constructor(
        public communityService: CommunityService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.getAllCommunities();
    }

    getAllCommunities() {
        this.communityService.getAllCommunities().subscribe(
            (res) => {
                this.communityService.communities = res;
                console.log(this.communityService.communities);
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

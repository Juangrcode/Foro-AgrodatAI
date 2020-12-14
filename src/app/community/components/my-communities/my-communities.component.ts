import { ConstantPool } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Community } from 'src/app/models/new_communities';

import { CommunityService } from '../../services/community.service';

@Component({
    selector: 'app-my-communities',
    templateUrl: './my-communities.component.html',
    styleUrls: ['./my-communities.component.scss'],
})
export class MyCommunitiesComponent implements OnInit {
    profileMyCommunities;
    dataUser;
    @ViewChild('busca')
    busca;
    filter: string = '';

    constructor(
        public communityService: CommunityService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.dataUser = localStorage.getItem('dataUser');
        this.getAllCommunities();
    }

    getAllCommunities() {
        this.communityService.getAllCommunities().subscribe(
            (res) => {
                this.communityService.communities = res;
                this.profileMyCommunities = this.communityService.communities.filter(
                    (item) => {
                        return item.profile.id == this.dataUser;
                    }
                );
                console.log(this.profileMyCommunities);
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

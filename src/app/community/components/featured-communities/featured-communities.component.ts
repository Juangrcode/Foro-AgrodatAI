import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Community } from 'src/app/models/new_communities';
import { CommunityService } from '../../services/community.service';

@Component({
    selector: 'app-featured-communities',
    templateUrl: './featured-communities.component.html',
    styleUrls: ['./featured-communities.component.scss'],
})
export class FeaturedCommunitiesComponent implements OnInit {
    featureCommunities;

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
                this.featureCommunities = this.communityService.communities.filter(
                    (item) => {
                        console.log(item.joinusers.length);
                        return item.joinusers.length;
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

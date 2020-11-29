import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { CommunityService } from '../../services/community.service';

@Component({
    selector: 'app-create-community',
    templateUrl: './create-community.component.html',
    styleUrls: ['./create-community.component.scss'],
})
export class CreateCommunityComponent implements OnInit {
    constructor(
        public communityService: CommunityService,
        private router: Router
    ) {}

    ngOnInit(): void {
        // this.getAllCommunities();
    }

    clickCommunity(id: number) {
        this.router.navigate(['/comunidad', id]);
        console.log('community');
        console.log(id);
        this.communityService.getCommunity(id).subscribe(
            (res) => console.log(res),
            (err) => console.log(err)
        );
    }

    // getAllCommunities() {
    //     this.communityService.getAllCommunities().subscribe(
    //         (res) => {
    //             this.communityService.communities = res;
    //         },
    //         (err) => {
    //             console.log(err);
    //         }
    //     );
    // }

    selectedCommunity(id: number) {
        console.log(id);
    }
}

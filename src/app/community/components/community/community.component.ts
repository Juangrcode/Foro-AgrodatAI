import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/activities.service';

@Component({
    selector: 'app-community',
    templateUrl: './community.component.html',
    styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
    constructor(public postsService: PostsService) {}

    ngOnInit(): void {
        this.getAllPosts();
    }

    getAllPosts() {
        this.postsService.getAllPosts().subscribe(
            (res) => {
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        );
    }
}

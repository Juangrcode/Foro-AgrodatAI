import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/posts';
import { PostsService } from 'src/app/services/activities.service';

@Component({
    selector: 'app-community',
    templateUrl: './community.component.html',
    styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
    constructor(public postsService: PostsService) {}
    posts;
    users;
    filterU;
    user;
    ngOnInit(): void {
        this.getAllPosts();
        // this.getAllProfiles(1);
    }

    getAllPosts() {
        this.postsService.getAllPosts().subscribe(
            (res) => {
                this.posts = res;
                console.log(this.posts);
                // console.log(this.posts[0].user.username);
                // console.log(this.posts[0].user.profile.picture.url);
                // this.filterU = this.posts.filter((item) =>item.user ==);
                for (let i = 0; i < this.posts.length; i++) {
                    // console.log(this.posts[i].user === 1);
                }
                this.getAllProfiles(1);
            },
            (err) => {
                console.log(err);
            }
        );
    }
    getAllProfiles(id) {
        this.postsService.getAllProfile(id).subscribe(
            (res) => {
                // this.postsService.profile = res;
                this.users = res;
                // console.log(this.users);
            },
            (err) => {
                console.log(err);
            }
        );
    }
}

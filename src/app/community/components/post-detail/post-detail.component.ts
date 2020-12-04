import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
    id;
    post;
    profile;
    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router,
        public postsService: PostsService
    ) {}

    ngOnInit(): void {
        this.activateRoute.params.subscribe((params: Params) => {
            this.id = params['id'];
            this.postsService.getPost(this.id).subscribe(
                (res) => {
<<<<<<< HEAD
                    this.post = res;
                    this.getProfile();
=======
                    this.posts = res;
>>>>>>> 3554e72baf9c116387f99a0b035223c24a0258fd
                },
                (err) => console.log(err)
            );
        });
    }

    getProfile() {
        this.postsService.getProfile(1).subscribe(
            (res) => {
                this.profile = res;
            },
            (err) => {
                console.log(err);
            }
        );
    }

    editPost(post) {
        this.postsService.selectPost = post;
    }
}
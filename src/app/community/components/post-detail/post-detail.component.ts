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
    posts;
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
                    this.posts = res;
                },
                (err) => console.log(err)
            );
        });
    }
}

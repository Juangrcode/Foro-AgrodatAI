import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Post } from 'src/app/models/posts';
import { CommentsService } from '../../services/comments.service';
import { PostsService } from '../../services/posts.service';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
    id;
    post: any = {
        user_name: '',
        created: '',
        profile: {},
        comments: [],
        activity: {
            name: '',
        },
        content: '',
    };
    profile;
    stateComment: boolean = false;
    dataUser;

    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router,
        public postsService: PostsService,
        public commentsService: CommentsService
    ) {
        this.dataUser = localStorage.getItem('dataUser');
    }

    ngOnInit(): void {
        this.getPost();
        this.getProfile(this.dataUser);
    }

    getPost() {
        this.activateRoute.params.subscribe((params: Params) => {
            this.id = params['id'];
            this.postsService.getPost(this.id).subscribe(
                (res) => {
                    this.post = res;
                    console.log(this.post);
                },
                (err) => console.log(err)
            );
        });
    }

    getProfile(user_id) {
        this.postsService.getProfile(user_id).subscribe(
            (res) => {
                this.profile = res;
                console.log(this.profile);
                console.log(this.post);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    editPost(post) {
        this.postsService.selectPost = post;
    }

    getAllPosts() {
        this.postsService.getAllPosts().subscribe(
            (res) => {
                this.postsService.posts = res;
                console.log(this.postsService.posts);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    addComment(text, id: number) {
        let formUser = {
            text: text.value,
            profileId: this.profile.id,
            post: id,
        };
        console.log(formUser);
        this.commentsService.createComment(formUser).subscribe(
            (res) => {
                this.getAllPosts();
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    deleteComment(id: number) {
        this.commentsService.deleteComment(id).subscribe(
            (res) => {
                this.getAllPosts();
                console.log(res);
            },
            (err) => console.log(err)
        );
    }

    commentView() {
        this.stateComment = true;
    }
}

import { Component, OnInit } from '@angular/core';
import { InterestsService } from '../../services/interests.service';
import { PostsService } from '../../services/posts.service';
import { NgForm } from '@angular/forms';
import { Post } from '../../../models/posts';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommentsService } from '../../services/comments.service';

interface HtmlInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

@Component({
    selector: 'app-foro',
    templateUrl: './foro.component.html',
    styleUrls: ['./foro.component.scss'],
})
export class ForoComponent implements OnInit {
    filterInterests: any[];
    profile;
    dataUser;
    userPost;
    resUser;
    newUserPost;
    pushUser = [];
    stateComment: boolean = false;
    stateBanner: boolean = false;
    like = 0;

    constructor(
        public interestsService: InterestsService,
        public postsService: PostsService,
        public commentsService: CommentsService,
        private router: Router,
        public authService: AuthService
    ) {}

    ngOnInit(): void {
        // if (!this.authService.isLoggedIn()) {
        //     this.router.navigate(['login']);
        // }
        this.dataUser = localStorage.getItem('dataUser');
        this.getAllInterests();
        this.getAllPosts();
        this.getProfile(this.dataUser);
    }

    getAllInterests() {
        this.interestsService.getAllInterests().subscribe(
            (res) => {
                console.log(res);
                this.interestsService.interests = res;
                this.filterInterests = this.interestsService.interests.filter(
                    (item) => {
                        return item.completed == true;
                    }
                );
                console.log(this.filterInterests);
            },
            (err) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        this.router.navigate(['/login']);
                    }
                }
            }
        );
    }

    getProfile(user_id: number) {
        this.postsService.getProfile(user_id).subscribe(
            (res) => {
                this.profile = res;
            },
            (err) => {
                console.log(err);
            }
        );
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

    getUserPost(id: number) {}

    addPost(form: NgForm) {
        console.log(this.profile);
        let formUser = {
            user: this.profile.id,
            profile: this.profile.id,
            content: form.value.content,
            profileId: this.profile.id,
        };
        console.log(formUser);
        if (form.value.id) {
            this.postsService.updatePost(formUser).subscribe(
                (res) => {
                    console.log(res);
                },
                (err) => {
                    console.log(err);
                }
            );
        } else {
            this.postsService.createPost(formUser).subscribe(
                (res) => {
                    console.log('anadir al post');
                    // this.communityClicked.emit(this.community.id);
                    this.getAllPosts();
                    form.reset();
                    this.pushUser = [];
                    // alert('pOst Creada');
                },
                (err) => {
                    console.log(err);
                }
            );
        }
    }

    postDetail(id: number) {
        this.router.navigate(['/comunidad/foro', id]);
        this.postsService.getPost(id).subscribe(
            (res) => console.log(res),
            (err) => console.log(err)
        );
    }

    // Comments

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

    selectBanner() {
        if (this.stateBanner === false) {
            this.stateBanner = true;
        } else {
            this.stateBanner = false;
        }
    }

    // Interections

    likeUser() {
        this.like++;
    }
}

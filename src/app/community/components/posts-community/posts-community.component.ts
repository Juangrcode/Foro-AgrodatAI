import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { InterestsService } from 'src/app/interests/services/interests.service';
import { AuthService } from 'src/app/services/auth.service';
import { CommentsService } from '../../services/comments.service';
import { PostsService } from '../../services/posts.service';

@Component({
    selector: 'app-posts-community',
    templateUrl: './posts-community.component.html',
    styleUrls: ['./posts-community.component.scss'],
})
export class PostsCommunityComponent implements OnInit {
    filterInterests: any[];
    profile;
    dataUser;
    userPost;
    resUser;
    newUserPost;
    pushUser = [];
    stateComment: boolean = false;
    posts;
    @Input() community; // Enviar  datos
    postCommunity;

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
                this.posts = res;
                console.log(this.posts);
                this.getPostCommunityDetail();
            },
            (err) => {
                console.log(err);
            }
        );
    }

    getPostCommunityDetail() {
        this.postCommunity = this.posts.filter((item) => {
            return item.community === this.community.id;
        });
        console.log(this.postCommunity);
    }

    // addPost(form: NgForm) {
    //     console.log(form);
    //     let formUser = {
    //         user: this.profile.id,
    //         profile: this.profile.id,
    //         content: form.value.content,
    //         profileId: this.profile.id,
    //         community: this.community.id,
    //     };
    //     console.log(formUser);
    //     if (form.value.id) {
    //         this.postsService.updatePost(formUser).subscribe(
    //             (res) => {
    //                 console.log(res);
    //             },
    //             (err) => {
    //                 console.log(err);
    //             }
    //         );
    //     } else {
    //         this.postsService.createPost(formUser).subscribe(
    //             (res) => {
    //                 console.log('anadir al post');
    //                 // this.communityClicked.emit(this.community.id);
    //                 this.getAllPosts();
    //                 form.reset();
    //                 this.pushUser = [];
    //                 // alert('pOst Creada');
    //             },
    //             (err) => {
    //                 console.log(err);
    //             }
    //         );
    //     }
    // }

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
}

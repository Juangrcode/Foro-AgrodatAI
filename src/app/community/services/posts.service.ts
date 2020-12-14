import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts';
import { Profile } from 'src/app/models/profile';
import { NgForm } from '@angular/forms';
import { PostCommunity } from 'src/app/models/posts_communities';
import { CommentCommunity } from 'src/app/models/comments_communities';

@Injectable({
    providedIn: 'root',
})
export class PostsService {
    URL_API = 'http://localhost:8000/api/posts/';
    URL_API_POST_COMMUNITY = 'http://localhost:8000/api/posts-communities/';
    URL_API_COMMENTS_COMMUNITY =
        'http://localhost:8000/api/comments-communities/';
    // URL_API = 'http://localhost:5000/posts/';
    URL_API_PROFILE = 'http://localhost:8000/api/profiles/';

    posts: Post[];
    selectPost: Post = {
        content: '',
        user: 0,
        profile: 0,
        title: '',
        activity: null,
    };
    profiles: Profile[];

    selectProfile: Profile = {
        url: '',
        user: '',
        picture: '',
        created: '',
        modified: '',
    };

    postsCommunity: PostCommunity[];

    commentsCommunity: CommentCommunity;

    constructor(private http: HttpClient) {}

    getAllPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.URL_API);
    }

    getPost(id: number) {
        return this.http.get<Post[]>(`${this.URL_API}${id}/`);
    }

    createPost(profileId, form: NgForm, activityId, file: File) {
        console.log(file);
        const fd = new FormData();
        fd.append('user', profileId);
        fd.append('profile', profileId);
        fd.append('content', form.value.content);
        fd.append('profileId', profileId);
        fd.append('activityId', activityId);
        fd.append('title', form.value.title);
        fd.append('photo', file);
        return this.http.post(this.URL_API, fd);
    }

    updatePost(profileId, form: NgForm, activityId, file: File, id) {
        const fd = new FormData();
        fd.append('user', profileId);
        fd.append('profile', profileId);
        fd.append('content', form.value.content);
        fd.append('profileId', profileId);
        fd.append('activityId', activityId);
        fd.append('title', form.value.title);
        fd.append('photo', file);
        return this.http.put(`${this.URL_API}${id}/`, fd);
    }

    deletePost(id: number) {
        return this.http.delete(`${this.URL_API}${id}/`);
    }

    // Profile

    getProfile(id: number) {
        return this.http.get(`${this.URL_API_PROFILE}${id}/`);
    }

    // updateProfile(profile: Profile) {
    //     return this.http.put(`${this.URL_API_PROFILE}${profile.url}/`, profile);
    // }

    // Posts Communities

    getAllPostsCommunities() {
        return this.http.get(`${this.URL_API_POST_COMMUNITY}`);
    }

    getAllPostCommunity(id: number) {
        return this.http.get(`${this.URL_API_POST_COMMUNITY}${id}`);
    }

    createPostCommunity(
        profileId,
        form: NgForm,
        activityId,
        file: File,
        community
    ) {
        const fd = new FormData();
        fd.append('user', profileId);
        fd.append('profile', profileId);
        fd.append('content', form.value.content);
        fd.append('profileId', profileId);
        fd.append('activityId', activityId);
        fd.append('title', form.value.title);
        fd.append('photo', file);
        fd.append('community', community);
        return this.http.post(this.URL_API_POST_COMMUNITY, fd);
    }

    updatePostCommunity(profileId, form: NgForm, activityId, file: File, id) {
        const fd = new FormData();
        fd.append('user', profileId);
        fd.append('profile', profileId);
        fd.append('content', form.value.content);
        fd.append('profileId', profileId);
        fd.append('activityId', activityId);
        fd.append('title', form.value.title);
        fd.append('photo', file);
        return this.http.put(`${this.URL_API_POST_COMMUNITY}${id}/`, fd);
    }
    // Posts Comments

    getAllCommentsCommunities() {
        return this.http.get(`${this.URL_API_COMMENTS_COMMUNITY}`);
    }

    getAllCommentCommunity(id: number) {
        return this.http.get(`${this.URL_API_COMMENTS_COMMUNITY}${id}`);
    }

    createCommentCommunity(commentCommunity: CommentCommunity) {
        return this.http.post(
            `${this.URL_API_COMMENTS_COMMUNITY}`,
            commentCommunity
        );
    }
}

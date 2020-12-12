import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts';
import { Profile } from 'src/app/models/profile';
import { NgForm } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class PostsService {
    URL_API = 'http://localhost:8000/api/posts/';
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

    constructor(private http: HttpClient) {}

    getAllPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.URL_API);
    }

    getPost(id: number) {
        return this.http.get<Post[]>(`${this.URL_API}${id}/`);
    }

    createPost(profileId, form: NgForm, activityId, file: File) {
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
}

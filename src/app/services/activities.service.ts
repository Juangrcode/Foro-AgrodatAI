import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/posts';
import { Profile } from '../models/profile';
import { Activity } from '../models/activities';

@Injectable({
    providedIn: 'root',
})
export class PostsService {
    // URL_API = 'http://localhost:8000/api-auth/login/';
    URL_API2 = 'http://localhost:8000/api/activities/';

    activity: Activity[];

    constructor(private http: HttpClient) {}

    // getAllPosts() {
    //     return this.http.get(this.URL_API);
    // }
    getAllProfile(id) {
        return this.http.get(`${this.URL_API2}${id}/`);
    }
}

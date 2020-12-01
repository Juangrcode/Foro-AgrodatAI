import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class PostsService {
    URL_API = 'http://localhost:8000/api/posts/';

    constructor(private http: HttpClient) {}

    getAllPosts() {
        return this.http.get(this.URL_API);
    }
}

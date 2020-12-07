import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/comment';

@Injectable({
    providedIn: 'root',
})
export class CommentsService {
    URL_API = 'http://localhost:8000/api/comments/';
    // URL_API = 'http://localhost:5000/posts/';

    comments: Comment[];
    selectComment: Comment = {
        text: '',
        profileId: 0,
    };

    constructor(private http: HttpClient) {}

    getAllComments(): Observable<Comment[]> {
        return this.http.get<Comment[]>(this.URL_API);
    }

    getComment(id: number) {
        return this.http.get<Comment[]>(`${this.URL_API}${id}/`);
    }

    createComment(post: Comment) {
        return this.http.post(this.URL_API, post);
    }

    deleteComment(id: number) {
        return this.http.delete(`${this.URL_API}${id}/`);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JoinUser } from 'src/app/models/join-user';

@Injectable({
    providedIn: 'root',
})
export class JoinUserService {
    URL_API = 'http://localhost:8000/api/join-user/';
    // URL_API = 'http://localhost:5000/posts/';

    comments: JoinUser[];
    selectComment: JoinUser = {
        profile: 0,
        community: 0,
    };

    constructor(private http: HttpClient) {}

    getAllJoinUser(): Observable<JoinUser[]> {
        return this.http.get<JoinUser[]>(this.URL_API);
    }

    getJoinUser(id: number) {
        return this.http.get<JoinUser[]>(`${this.URL_API}${id}/`);
    }

    createJoinUser(communityId, profileId) {
        const fd = new FormData();
        fd.append('profileId', profileId);
        fd.append('community', communityId);
        return this.http.post(this.URL_API, fd);
    }

    deleteJoinUser(id: number) {
        return this.http.delete(`${this.URL_API}${id}/`);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Community } from '../models/new_communities';

@Injectable({
    providedIn: 'root',
})
export class CommunityService {
    URL_API = 'http://localhost:8000/api/new_communities/';

    selectedCommunity: Community = {
        name: '',
        description: '',
        activities: Array[''],
    };
    communities: Community[];

    constructor(private http: HttpClient) {}

    getAllCommunities() {
        return this.http.get<Community[]>(this.URL_API);
    }

    createCommunity(community: Community) {
        return this.http.post(this.URL_API, community);
    }

    updateCommunity(community: Community) {
        return this.http.put(`${this.URL_API}${community.id}/`, community);
    }

    deleteCommunity(id: number) {
        return this.http.delete(`${this.URL_API}${id}/`);
    }
}

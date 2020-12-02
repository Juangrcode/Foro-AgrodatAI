import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Community } from '../../models/new_communities';

@Injectable({
    providedIn: 'root',
})
export class CommunityService {
    URL_API = 'http://localhost:8000/api/new_communities/';
    // URL_API = 'http://localhost:2000/new_communities/';

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

    getCommunity(id: number) {
        return this.http.get(`${this.URL_API}${id}/`);
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

    // createPhoto(
    //     name: string,
    //     activities: string,
    //     description: string,
    //     picture: File
    // ) {
    //     const fd = new FormData();
    //     fd.append('name', name);
    //     fd.append('activities', activities);
    //     fd.append('description', description);
    //     fd.append('pictures', picture);
    //     return this.http.post(this.URL_API, fd);
    // }
}

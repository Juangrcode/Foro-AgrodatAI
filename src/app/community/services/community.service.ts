import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Community } from '../../models/new_communities';

@Injectable({
    providedIn: 'root',
})
export class CommunityService {
    // URL_API = 'http://localhost:8000/api/new-communities/';
    URL_API = 'http://localhost:2000/new_communities/';
    myCommunities: boolean = false;
    selectedCommunity: Community = {
        id: 0,
        name: '',
        picture: '',
        description: '',
        profile: {
            id: 0,
            user: '',
            picture: '',
        },
        activity: 0,
    };
    communities: Community[];

    constructor(private http: HttpClient) {}

    getAllCommunities() {
        return this.http.get<Community[]>(this.URL_API);
    }

    getCommunity(id: number) {
        return this.http.get(`${this.URL_API}${id}/`);
    }

    createCommunity(
        name: string,
        description: string,
        file: File,
        profile,
        activity
    ) {
        const fd = new FormData();
        fd.append('name', name);
        fd.append('picture', file);
        fd.append('description', description);
        fd.append('profileId', profile);
        fd.append('activityId', activity);
        return this.http.post(this.URL_API, fd);
    }

    createNewCommunity(community) {
        return this.http.post(this.URL_API, community);
    }

    updateCommunity(
        id,
        name: string,
        description,
        file: File,
        profile,
        activity
    ) {
        const fd = new FormData();
        fd.append('name', name);
        fd.append('picture', file);
        fd.append('description', description);
        fd.append('profileId', profile);
        fd.append('activityId', activity);
        return this.http.put<Community[]>(`${this.URL_API}${id}/`, fd);
    }

    deleteCommunity(id: number) {
        return this.http.delete(`${this.URL_API}${id}/`);
    }

    // createPhoto(name: string, description: string, picture: File) {
    //     console.log(picture);
    //     const fd = new FormData();
    //     fd.append('name', name);
    //     fd.append('description', description);
    //     fd.append('pictures', picture);
    //     return this.http.post(this.URL_API, fd);
    // }
}

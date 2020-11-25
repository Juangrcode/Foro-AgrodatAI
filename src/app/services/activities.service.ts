import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Activity } from '../models/activities';

@Injectable({
    providedIn: 'root',
})
export class ActivitiesService {
    URL_API = 'http://localhost:8000/api/activities/';

    selectedCommunity: Activity = {
        name: '',
        interests: [],
    };
    communities: Activity[];

    constructor(private http: HttpClient) {}

    getAllCommunities() {
        return this.http.get<Activity[]>(this.URL_API);
    }
}

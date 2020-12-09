import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/models/activities';

@Injectable({
    providedIn: 'root',
})
export class ActivitiesService {
    URL_API = 'http://localhost:8000/api/activities/';

    activity: Activity[];
    selectActivity: Activity = {
        name: '',
        interests: [],
    };

    constructor(private http: HttpClient) {}

    getAllActivities(): Observable<Activity[]> {
        return this.http.get<Activity[]>(this.URL_API);
    }

    getActivity(id: number) {
        return this.http.get<Activity[]>(`${this.URL_API}${id}/`);
    }

    updateActivity(interest: Activity) {
        return this.http.put(`${this.URL_API}${interest.id}/`, interest);
    }
}

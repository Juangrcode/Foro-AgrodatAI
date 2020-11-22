import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interest } from '../models/interests';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterestsService {
  URL_API = 'http://localhost:8000/api/interests/';

  interests: Interest[];

  constructor(private http: HttpClient) { }

  getAllInterests(): Observable<Interest[]> {
    return this.http.get<Interest[]>(this.URL_API);
  }

  // getInterest(id: string) {
  //   return this.http.get<Interest[]>(`${this.URL_API}/${id}/`);
  // }
}

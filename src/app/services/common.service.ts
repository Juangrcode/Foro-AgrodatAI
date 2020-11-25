import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Common }from '../models/common'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  URL_API = 'http://localhost:8000/api/common/';

  common: Common[];

  constructor(private http: HttpClient) { }

  getAllCommon(): Observable<Common[]> {
    return this.http.get<Common[]>(this.URL_API)
  }

  getCommon(id: string) {
    return this.http.get<Common[]>(`${this.URL_API}/${id}/`);
  }

  createCommon(common: Common) {
    return this.http.post(this.URL_API, common);
  }

  putEmployee(common: Common) {
    return this.http.put(`${this.URL_API}/${common.id}`, common);
  }

  deleteEmployee(id: string) {
    return this.http.delete(`${this.URL_API}/${id}`);
  }
}

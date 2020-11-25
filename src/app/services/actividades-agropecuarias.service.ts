import { ArrayHttpResponse } from './../shared/array-http-response';
import { Actividad } from './../models/actividad';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const ACTIVIDADES_ENDPOINT =
    'http://localhost:8000/administracion/actividades/';

@Injectable({
    providedIn: 'root',
})
export class ActividadesAgropecuariasService {
    constructor(private http: HttpClient) {}

    findActividades(
        limit: number,
        offset: number
    ): Observable<ArrayHttpResponse<Actividad>> {
        return this.http.get<ArrayHttpResponse<Actividad>>(
            ACTIVIDADES_ENDPOINT,
            {
                params: this.paginationParams(limit, offset),
            }
        );
    }

    findSingleActividad(id: number): Observable<Actividad> {
        return this.http.get<Actividad>(`${ACTIVIDADES_ENDPOINT}${id}/`);
    }

    crearAtividad(actividad: Actividad): Observable<any> {
        return this.http.post(ACTIVIDADES_ENDPOINT, actividad);
    }

    updateActividad(actividad: Actividad): Observable<any> {
        return this.http.put<Actividad>(
            `${ACTIVIDADES_ENDPOINT}${actividad.id}/`,
            actividad
        );
    }

    deleteActividad(id: number): Observable<any> {
        return this.http.delete(`${ACTIVIDADES_ENDPOINT}${id}/`);
    }

    private paginationParams(limit: number, offset: number): HttpParams {
        return new HttpParams()
            .append('limit', `${limit}`)
            .append('offset', `${offset}`);
    }
}

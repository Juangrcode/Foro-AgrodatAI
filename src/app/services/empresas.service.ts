import { ArrayHttpResponse } from './../shared/array-http-response';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Empresa } from './../models/empresa';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const EMPRESAS_ENDPOINT = 'http://localhost:8000/administracion/empresas/';

@Injectable({
    providedIn: 'root',
})
export class EmpresasService {
    constructor(private http: HttpClient) {}

    findSingleEmpresa(id: number): Observable<Empresa> {
        return this.http.get(`${EMPRESAS_ENDPOINT}${id}/`);
    }

    findEmpresas(
        limit: number,
        offset: number
    ): Observable<ArrayHttpResponse<Empresa>> {
        return this.http.get<ArrayHttpResponse<Empresa>>(EMPRESAS_ENDPOINT, {
            params: this.paginationParams(limit, offset),
        });
    }

    createEmpresa(empresaToSave: Empresa): Observable<any> {
        return this.http.post<any>(`${EMPRESAS_ENDPOINT}`, empresaToSave);
    }

    updateEmpresa(empresaToSave: Empresa): Observable<any> {
        return this.http.put<any>(
            `${EMPRESAS_ENDPOINT}${empresaToSave.id}/`,
            empresaToSave
        );
    }

    deleteEmpresa(idEmpresa): Observable<any> {
        return this.http.delete(`${EMPRESAS_ENDPOINT}${idEmpresa}/`);
    }

    private paginationParams(limit: number, offset: number): HttpParams {
        return new HttpParams()
            .append('limit', `${limit}`)
            .append('offset', `${offset}`);
    }
}

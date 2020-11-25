import { Actividad } from './../../models/actividad';
import { ActividadesAgropecuariasService } from './../../services/actividades-agropecuarias.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'app-actividades-agropecuarias',
  templateUrl: './actividades-agropecuarias.component.html',
  styleUrls: ['./actividades-agropecuarias.component.scss']
})
export class ActividadesAgropecuariasComponent implements OnInit {
  loading = true;
    limit = 5;
    offset = 0;
    count = 0;

    actividades$: BehaviorSubject<Actividad[]> = new BehaviorSubject([]);

    constructor(private service: ActividadesAgropecuariasService) {}

    ngOnInit(): void {
        this.loadActividades(this.limit, this.offset);
    }

    private loadActividades(limit: number, offset: number): void {
        this.service
            .findActividades(limit, offset)
            .pipe(
                tap(() => (this.loading = true)),
                map((res) => {
                    this.count = res.count;
                    return res.results;
                }),
                tap(() => (this.loading = false)),
                catchError((err) => {
                    this.loading = false;
                    this.count = 0;
                    return of([]);
                })
            )
            .subscribe((actividades) => {
                this.actividades$.next(actividades);
            });
    }

    onPageChange(offset: number): void {
        this.offset = offset;
        this.loadActividades(this.limit, this.offset);
    }

    onDelete(actividad: Actividad): void {
        const c = confirm(
            `¿ Desea eliminar la empresa ${actividad.nombre_actividad} ?`
        );
        if (c) {
            console.log(this.offset);
            this.service.deleteActividad(actividad.id).subscribe(
                (d) => {
                    this.offset = 0;
                    this.loadActividades(this.limit, this.offset);
                },
                (err) => console.error(err)
            );
        }
    }
}

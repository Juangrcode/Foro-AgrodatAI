import { EmpresasService } from './../../services/empresas.service';
import { OnInit, Component, ViewChild } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';
import { MatPaginator } from '@angular/material/paginator';
import { catchError, map, startWith, switchMap, tap } from 'rxjs/operators';
import { of, BehaviorSubject, Observable } from 'rxjs';
@Component({
    selector: 'app-empresas',
    templateUrl: './empresas.component.html',
    styleUrls: ['./empresas.component.scss'],
})
export class EmpresasComponent implements OnInit {
    loading = true;
    limit = 5;
    offset = 0;
    count = 0;

    empresas$: BehaviorSubject<Empresa[]> = new BehaviorSubject([]);

    constructor(private empresaService: EmpresasService) {}

    ngOnInit(): void {
        this.loadEmpresas(this.limit, this.offset);
    }

    private loadEmpresas(limit: number, offset: number): void {
        this.empresaService
            .findEmpresas(limit, offset)
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
            .subscribe((empresas) => {
                this.empresas$.next(empresas);
            });
    }

    onPageChange(offset: number): void {
        this.offset = offset;
        this.loadEmpresas(this.limit, this.offset);
    }

    onDelete(empresa: Empresa): void {
        const c = confirm(
            `¿ Desea eliminar la empresa ${empresa.nombre_empresa} ?`
        );
        if (c) {
            console.log(this.offset);
            this.empresaService.deleteEmpresa(empresa.id).subscribe(
                (d) => {
                    this.offset = 0;
                    this.loadEmpresas(this.limit, this.offset);
                },
                (err) => console.error(err)
            );
        }
    }
}

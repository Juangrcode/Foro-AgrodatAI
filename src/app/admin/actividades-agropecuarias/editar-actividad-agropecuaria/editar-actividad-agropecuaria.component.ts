import { AlertService } from './../../../services/alert.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ActividadesAgropecuariasService } from './../../../services/actividades-agropecuarias.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Actividad } from 'src/app/models/actividad';

@Component({
    selector: 'app-editar-actividad-agropecuaria',
    templateUrl: './editar-actividad-agropecuaria.component.html',
    styleUrls: ['./editar-actividad-agropecuaria.component.scss'],
})
export class EditarActividadAgropecuariaComponent implements OnInit, OnDestroy {
    id: number;
    subscription$: Subscription;
    frmActividad = this.fb.group({
        nombre: ['', Validators.required],
        tipo: ['', Validators.required],
    });

    constructor(
        private service: ActividadesAgropecuariasService,
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private alert: AlertService,
        private router: Router
    ) {}

    private getFormValues(): Actividad {
        return {
            id: this.id,
            nombre_actividad: this.nombre.value,
            tipo: this.tipo.value,
        };
    }

    onSubmit() {
        const actividad = this.getFormValues();
        this.service.updateActividad(actividad).subscribe(
            (r) => {
                this.alert.showSuccesMessage(
                    'Actividad agropecuaria editata',
                    'La actividad agropecuaria se ha editado satisfactoriamente.'
                );
            },
            (e) => {
                this.alert.showErrorMessage(
                    'Actividad agropecuaria no editada',
                    'Ha ocurrido un error al editar la actividad agropecuaria.'
                );
            }
        );
    }

    ngOnInit() {
        this.route.paramMap.subscribe((p) => {
            this.subscription$ = this.service
                .findSingleActividad(Number(p.get('id')))
                .subscribe(
                    (a) => {
                        this.id = a.id;
                        this.frmActividad.patchValue({
                            nombre: a.nombre_actividad,
                            tipo: a.tipo,
                        });
                    },
                    (e) => {
                        this.alert.showErrorMessage(
                            'Error',
                            'No se puede encontrar la actividad agropecuaria solicitada'
                        );
                        // .then(() => {
                        //     this.router.navigate([
                        //         '/admin/actividades-agropecuarias/list',
                        //     ]);
                        // });
                    }
                );
        });
    }

    ngOnDestroy(): void {
        this.subscription$.unsubscribe();
    }

    get nombre() {
        return this.frmActividad.get('nombre');
    }

    get tipo() {
        return this.frmActividad.get('tipo');
    }
}

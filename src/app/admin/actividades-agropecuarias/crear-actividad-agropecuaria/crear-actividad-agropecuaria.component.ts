import { AlertService } from './../../../services/alert.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActividadesAgropecuariasService } from './../../../services/actividades-agropecuarias.service';
import { Component, OnInit } from '@angular/core';
import { Actividad } from 'src/app/models/actividad';

@Component({
    selector: 'app-crear-actividad-agropecuaria',
    templateUrl: './crear-actividad-agropecuaria.component.html',
    styleUrls: ['./crear-actividad-agropecuaria.component.scss'],
})
export class CrearActividadAgropecuariaComponent implements OnInit {
    frmActividad = this.fb.group({
        nombre: ['', Validators.required],
        tipo: ['', Validators.required],
    });

    constructor(
        private service: ActividadesAgropecuariasService,
        private fb: FormBuilder,
        private alert: AlertService
    ) {}

    private getFormValues(): Actividad {
        return {
            nombre_actividad: this.nombre.value,
            tipo: this.tipo.value,
        };
    }

    onSubmit() {
        const actividad = this.getFormValues();
        this.service.crearAtividad(actividad).subscribe(
            (r) => {
                this.alert.showSuccesMessage(
                    'Actividad agropecuaria registrada',
                    'La actividad agropecuaria se ha registrado satisfactoriamente.'
                );
                // .then(() => {
                //     this.frmActividad.reset();
                // });
            },
            (e) => {
                this.alert.showErrorMessage(
                    'Actividad agropecuaria no registrada',
                    'Ha ocurrido un error al registrar la actividad agropecuaria.'
                );
            }
        );
    }

    ngOnInit() {}

    get nombre() {
        return this.frmActividad.get('nombre');
    }

    get tipo() {
        return this.frmActividad.get('tipo');
    }
}

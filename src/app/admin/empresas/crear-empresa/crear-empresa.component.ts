import { AlertService } from './../../../services/alert.service';
import { FormBuilder, Validators } from '@angular/forms';
import { EmpresasService } from './../../../services/empresas.service';
import { Empresa } from 'src/app/models/empresa';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-crear-empresa',
    templateUrl: './crear-empresa.component.html',
    styleUrls: ['./crear-empresa.component.scss'],
})
export class CrearEmpresaComponent implements OnInit {
    frmEmpresa = this.fb.group({
        nombre: ['', Validators.required],
        nit: [''],
        telefono: [''],
        is_admin: [''],
    });

    constructor(
        private service: EmpresasService,
        private fb: FormBuilder,
        private alert: AlertService
    ) {}

    ngOnInit() {}

    getFormValues(): Empresa {
        const empresa: Empresa = {
            nombre_empresa: this.nombre.value,
            nit: this.nit.value,
            is_admin: Number(this.is_admin.value),
            telefono: this.telefono.value,
            tipo: '1',
        };
        return empresa;
    }

    onSubmit() {
        console.log('submited');
        const empresaToSave = this.getFormValues();
        this.service.createEmpresa(empresaToSave).subscribe(
            (r) => {
                this.alert
                    .showSuccesMessage(
                        'Empresa registrada',
                        'La empresa se ha registrado satisfactoriamente.'
                    )
                    .then(() => {
                        this.frmEmpresa.reset();
                    });
            },
            (e) => {
                if (e.status === 400 && e.error.nombre_empresa) {
                    this.nombre.setErrors({ unique: true });
                } else {
                    this.alert.showErrorMessage(
                        'Empresa no registrada',
                        'Ha ocurrido un error al registrar la empresa.'
                    );
                }
            }
        );
    }

    get nombre() {
        return this.frmEmpresa.get('nombre');
    }

    get nit() {
        return this.frmEmpresa.get('nit');
    }

    get is_admin() {
        return this.frmEmpresa.get('is_admin');
    }

    get telefono() {
        return this.frmEmpresa.get('telefono');
    }
}

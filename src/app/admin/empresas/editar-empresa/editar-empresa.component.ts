import { AlertService } from './../../../services/alert.service';
import { Observable, Subscription } from 'rxjs';
import { EmpresasService } from './../../../services/empresas.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/models/empresa';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-editar-empresa',
    templateUrl: './editar-empresa.component.html',
    styleUrls: ['./editar-empresa.component.scss'],
})
export class EditarEmpresaComponent implements OnInit, OnDestroy {
    id: number;
    subcription$: Subscription;

    frmEmpresa = this.fb.group({
        nombre: ['', Validators.required],
        nit: [''],
        telefono: [''],
        is_admin: [''],
    });

    constructor(
        private route: ActivatedRoute,
        private service: EmpresasService,
        private fb: FormBuilder,
        private alert: AlertService,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.paramMap
            .subscribe((p) => {
                this.subcription$ = this.service
                    .findSingleEmpresa(Number(p.get('id')))
                    .subscribe(
                        (company) => {
                            this.id = company.id;
                            this.frmEmpresa.patchValue({
                                nombre: company.nombre_empresa,
                                nit: company.nit,
                                telefono: company.telefono,
                                is_admin: company.is_admin,
                            });
                        },
                        (e) => {
                            this.alert
                                .showErrorMessage(
                                    'Error',
                                    'No se puede encontrar la empresa solicitada'
                                )
                                .then(() => {
                                    this.router.navigate([
                                        '/admin/empresas/list',
                                    ]);
                                });
                        }
                    );
            })
            .unsubscribe();
    }

    ngOnDestroy(): void {
        this.subcription$.unsubscribe();
    }

    getFormValues(): Empresa {
        const empresa: Empresa = {
            id: this.id,
            nombre_empresa: this.nombre.value,
            nit: this.nit.value,
            is_admin: Number(this.is_admin.value),
            telefono: this.telefono.value,
            tipo: '1',
        };
        return empresa;
    }

    onSubmit() {
        const empresaToSave = this.getFormValues();
        this.service.updateEmpresa(empresaToSave).subscribe(
            (r) => {
                this.alert.showSuccesMessage(
                    'Empresa editada',
                    'La empresa se ha editado satisfactoriamente.'
                );
            },
            (e) => {
                if (e.status === 400 && e.error.nombre_empresa) {
                    this.nombre.setErrors({ unique: true });
                } else {
                    this.alert.showErrorMessage(
                        'Empresa no editada',
                        'Ha ocurrido un error al editar la empresa.'
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

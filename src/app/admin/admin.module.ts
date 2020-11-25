import { EditarActividadAgropecuariaComponent } from './actividades-agropecuarias/editar-actividad-agropecuaria/editar-actividad-agropecuaria.component';
import { CrearActividadAgropecuariaComponent } from './actividades-agropecuarias/crear-actividad-agropecuaria/crear-actividad-agropecuaria.component';
import { ActividadesAgropecuariasComponent } from './actividades-agropecuarias/actividades-agropecuarias.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarEmpresaComponent } from './empresas/editar-empresa/editar-empresa.component';
import { CrearEmpresaComponent } from './empresas/crear-empresa/crear-empresa.component';
import { PaginationModule } from './../components/pagination/pagination.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../material.module';
import { EmpresasComponent } from './empresas/empresas.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'empresas/list',
                component: EmpresasComponent,
            },
            {
                path: 'empresas/edit/:id',
                component: EditarEmpresaComponent,
            },
            {
                path: 'empresas/create',
                component: CrearEmpresaComponent,
            },
            {
                path: 'actividades-agropecuarias/list',
                component: ActividadesAgropecuariasComponent,
            },
            {
                path: 'actividades-agropecuarias/edit/:id',
                component: EditarActividadAgropecuariaComponent,
            },
            {
                path: 'actividades-agropecuarias/create',
                component: CrearActividadAgropecuariaComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        PaginationModule,
    ],
    declarations: [
        AdminComponent,
        EmpresasComponent,
        CrearEmpresaComponent,
        EditarEmpresaComponent,
        ActividadesAgropecuariasComponent,
        CrearActividadAgropecuariaComponent,
        EditarActividadAgropecuariaComponent
    ],
    exports: [RouterModule],
})
export class AdminModule {}

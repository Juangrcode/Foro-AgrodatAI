import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaquetaComponent } from '../app/maqueta/maqueta.component';
import { NoticiaComponent } from './noticia/noticia.component'
import { PerfilComponent } from './perfil/perfil.component'
import { ProveedorComponent } from './proveedor/proveedor.component'
import { ProductorComponent } from './productor/productor.component'


const routes: Routes = [
  {
    path: 'noticias',
    component: MaquetaComponent
  },
  {
    path: 'noticias/:title',
    component: NoticiaComponent
  },
  // path: 'entidadpublica/:value', value es el nombre que viene en como parametro en app.component.ts
  {
    
    path: 'entidadpublica/:value',
    component: PerfilComponent
  },
  {
    path: 'proveedor',
    component: ProveedorComponent
  },
  {
    path: 'productor/:value',
    component: ProductorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

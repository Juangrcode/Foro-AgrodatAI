import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaquetaComponent } from '../app/maqueta/maqueta.component';
import { NoticiaComponent } from './noticia/noticia.component';//esta linea lo redirige a noticias
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
  {
    path: 'entidadpublica/:value',
    component: PerfilComponent
  },
  {
    path: 'proveedor/:value',
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

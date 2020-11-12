import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaquetaComponent } from '../app/maqueta/maqueta.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { InteresesComponent } from './intereses/intereses.component';

const routes: Routes = [
  {
    path: 'noticias',
    component: MaquetaComponent,
  },
  {
    path: 'noticias/:title',
    component: NoticiaComponent,
  },
  {
    path: 'intereses',
    component: InteresesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

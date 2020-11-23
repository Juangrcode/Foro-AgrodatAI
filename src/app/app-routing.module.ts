import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaquetaComponent } from '../app/maqueta/maqueta.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProductorComponent } from './productor/productor.component';
import { InterestsComponent } from './interests/interests.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommonComponent } from './common/common.component';

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
    path: 'proveedor',
    component: ProveedorComponent,
  },
  {
    path: 'productor/:value',
    component: ProductorComponent,
  },
  {
    path: 'intereses',
    component: InterestsComponent,
  },
  {
    path: 'comunidad',
    component: CommonComponent,
  },
  {
    path: 'post/:id',
    component: PostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MaquetaComponent } from '../app/maqueta/maqueta.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { ProductorComponent } from './productor/productor.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { PostsComponent } from './components/posts/posts.component';

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
        loadChildren: () =>
            import('./interests/interests.module').then(
                (m) => m.InterestsModule
            ),
    },
    {
        path: 'comunidad',
        loadChildren: () =>
            import('./community/community.module').then(
                (m) => m.CommunityModule
            ),
    },
    {
        path: 'post/:id',
        component: PostsComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}

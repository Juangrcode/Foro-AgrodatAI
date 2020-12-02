import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MaquetaComponent } from '../app/maqueta/maqueta.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { ProductorComponent } from './productor/productor.component';
//import { ProveedorComponent } from './proveedor/proveedor.component';
// import { PostsComponent } from './components/posts/posts.component';
import { ModuleComuComponent} from './module-comu/module-comu.component'
import { ModuleCreadasComponent } from './module-creadas/module-creadas.component'



const routes: Routes = [
    {
        path: 'comunidades',
        component: ModuleComuComponent,
    },
    {
        path: 'comunidadesCreadas',
        component: ModuleCreadasComponent,
    },
    {
        path: 'noticias',
        component: MaquetaComponent,
    },
    {
        path: 'noticias/:title',
        component: NoticiaComponent,
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
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            enableTracing: true,
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}

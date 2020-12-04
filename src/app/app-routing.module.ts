import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MaquetaComponent } from '../app/maqueta/maqueta.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { ProductorComponent } from './productor/productor.component';
//import { ProveedorComponent } from './proveedor/proveedor.component';
// import { PostsComponent } from './components/posts/posts.component';
import { ModuleComuComponent } from './module-comu/module-comu.component';
import { ModuleCreadasComponent } from './module-creadas/module-creadas.component';
import { LoginComponent } from './perfil/login.component';
import { SignupComponent } from './perfil/signup.component';
import { ListComponent } from './perfil/perfil.component';
import { AuthGuard } from './services/auth.service';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'list', component: ListComponent, canActivate: [AuthGuard] },
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
        canActivate: [AuthGuard],
    },
    {
        path: 'comunidad',
        loadChildren: () =>
            import('./community/community.module').then(
                (m) => m.CommunityModule
            ),
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            // enableTracing: true,
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}

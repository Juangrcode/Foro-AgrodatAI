import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaquetaComponent } from './maqueta/maqueta.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { ProductorComponent } from './productor/productor.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BannerComponent } from './banner/banner.component';
import { ModuleComuComponent } from './module-comu/module-comu.component';
import { ModuleCreadasComponent } from './module-creadas/module-creadas.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
// Services

@NgModule({
    declarations: [
        AppComponent,
        MaquetaComponent,
        NoticiaComponent,
        ProductorComponent,
        PerfilComponent,
        NavbarComponent,
        HeaderComponent,
        BannerComponent,
        ModuleComuComponent,
        ModuleCreadasComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

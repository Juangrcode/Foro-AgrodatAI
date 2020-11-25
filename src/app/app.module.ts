import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProductorComponent } from './productor/productor.component';
import { InterestsComponent } from './interests/interests.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PerfilComponent } from './perfil/perfil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { InterestComponent } from './interest/interest.component';
import { CommonComponent } from './common/common.component';
import { CreateCommunityComponent } from './create-community/create-community.component';
import { NewCommunityComponent } from './new-community/new-community.component';
import { FormNewCommunityComponent } from './form-new-community/form-new-community.component';
import { ViewNewCommunityComponent } from './view-new-community/view-new-community.component';

@NgModule({
    declarations: [
        AppComponent,
        MaquetaComponent,
        NoticiaComponent,
        ProveedorComponent,
        ProductorComponent,
        InterestsComponent,
        FilterPipe,
        PerfilComponent,
        NavbarComponent,
        HeaderComponent,
        BannerComponent,
        InterestComponent,
        CommonComponent,
        CreateCommunityComponent,
        NewCommunityComponent,
        FormNewCommunityComponent,
        ViewNewCommunityComponent,
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
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaquetaComponent } from './maqueta/maqueta.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProductorComponent } from './productor/productor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';//funciona para trabajar con el ngmodel
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { InterestsComponent } from './interests/interests.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PerfilComponent } from './perfil/perfil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { InterestComponent } from './interest/interest.component';
import { CommonComponent } from './common/common.component'

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
export class AppModule { }

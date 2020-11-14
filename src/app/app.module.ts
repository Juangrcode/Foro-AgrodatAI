import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaquetaComponent } from './maqueta/maqueta.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProductorComponent } from './productor/productor.component';

@NgModule({
  declarations: [
    AppComponent,
    MaquetaComponent,
    NoticiaComponent,
    ProveedorComponent,
    ProductorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

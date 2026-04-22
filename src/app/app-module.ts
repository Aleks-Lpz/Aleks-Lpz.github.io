import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importante para el servicio
import { CommonModule } from '@angular/common'; // Para que funcione el *ngIf

import { AppComponent } from './app'; // Cambia 'App' por 'AppComponent'

@NgModule({
  declarations: [
    // DEJA ESTO VACÍO (borra AppComponent de aquí)
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppComponent // PONLO AQUÍ, como un import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PuntosComponent } from './puntos/puntos.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { ResistenciaModule } from './resitencias/resistencia/resistencia.module';
import { CineModule } from './cine/cine/cine.module';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    PuntosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ResistenciaModule,
    FormsModule,
    CineModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

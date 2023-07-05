import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResistenciasComponent } from 'src/app/resistencias/resistencias.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ResistenciasComponent],
  imports: [
    CommonModule,
    FormsModule
    ],
  exports:[
    ResistenciasComponent
  ]
})
export class ResistenciaModule { }

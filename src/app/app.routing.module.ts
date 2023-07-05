import { RouterModule,Routes } from "@angular/router";
import { Component, NgModule } from "@angular/core";
import { CineComponent } from "./cine/cine.component";
import { PuntosComponent } from "./puntos/puntos.component";
import { ResistenciasComponent } from "./resistencias/resistencias.component";


const routes:Routes=[
    {path:'',redirectTo:'/home', pathMatch:'full'},
    {path:'puntos', component : CineComponent},
    {path:'cine', component : PuntosComponent},
    {path:'resistencias', component : ResistenciasComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})
export class AppRoutingModule{}
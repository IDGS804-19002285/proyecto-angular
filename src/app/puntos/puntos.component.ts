import { Component } from '@angular/core';

@Component({
  selector: 'app-puntos',
  templateUrl: './puntos.component.html',
  styleUrls: ['./puntos.component.css']
})
export class PuntosComponent {

  numero1 !:number;
  numero2 !:number;
  numero3 !:number;
  numero4 !:number;
  resultado:number=0;

  calcular(){
    console.log(
      this.resultado= 
      Math.sqrt(((this.numero2 - this.numero1)**2 ) + ((this.numero4 - this.numero3)**2))
      );
  }

}

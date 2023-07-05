import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {

  colores = [
    {name:'Negro',value:0, rgb:'#000',text:'#FFF'},
    {name:'Cafe',value:1, rgb:'#ca8056',text:'#FFF'},
    {name:'Rojo',value:2, rgb:'#F00',text:'#FFF'},
    {name:'Naranja',value:3, rgb:'#e67912',text:'#FFF'},
    {name:'Amarillo',value:4, rgb:'#fbf214',text:'#000'},
    {name:'Verde',value:5, rgb:'#0F0',text:'#000'},
    {name:'Azul',value:6, rgb:'#00F',text:'#FFF'},
    {name:'Violeta',value:7, rgb:'#96447a',text:'#FFF'},
    {name:'Gris',value:8, rgb:'#82817e',text:'#FFF'},
    {name:'Blanco',value:9, rgb:'#FFF',text:'#000'}
  ]

  V1!:number;
  V2!:number;
  V3!:number;
  V4!:number;

  res = {
    base:0,
    max:0,
    min:0
  } ;
  tabla:any = [];


  calcularR(){
    if(!this.V1 || !this.V2 || !this.V3 || !this.V4){
      alert('Faltan valores por colocar');
    }else{
      var base =
      parseInt((this.V1?? '') + ''+ this.V2 + '0'.repeat(this.V3));
      var variation = base*this.V4;
      
      this.res.base = base;
      this.res.max = base+variation;
      this.res.min = base-variation;

      var r = [
        this.colores[this.V1].value,
        this.colores[this.V2].value,
        this.colores[this.V3].value,
        this.res.base,
        this.res.max,
        this.res.min
      ];
      this.tabla.push(r);
    }
  }
}

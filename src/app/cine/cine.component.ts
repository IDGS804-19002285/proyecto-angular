import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent {

 resultado!:string;

  
  formData = {
    Name: '',
    NPeople: '',
    CreditCard: 'No',
    NTickets: ''
  };
  end!: number;
  
  Calcular(formulario: NgForm){
    if (formulario.value.NTickets >= formulario.value.NPeople*7) { 
      this.resultado='Fallida'
    }else{
      var fin = formulario.value.NTickets * 12
      if (formulario.value.NTickets == 3 || formulario.value.NTickets == 4 || formulario.value.NTickets == 5) {
        fin = fin * 0.9
      }else if(formulario.value.NTickets >5){
        fin = fin * 0.85
      }

      if (formulario.value.CreditCard == 'Si') {
        fin = fin * 0.9
      }
      this.end = fin;
      this.resultado='Completada'
    }   
  }

}

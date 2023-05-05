
import { Component } from "@angular/core";



@Component ({
    selector: "app-contador",
    template: `
    
    <h1> {{titulo}} </h1>
    <h3>La base es: <strong> {{base}} </strong></h3>
    
    <button (click)="acumular(-2)" > -2 </button>
    
    <span> {{base}} </span>
    
    <button (click)="acumular(+2)" > +2 </button>

    <button (click)="reset(base)">reset</button>
    
    `
}) 
export class contadorComponent {

    public titulo: string = 'Contador App';
    public base: number = 5;
  
    acumular(valor: number) {
      this.base += valor;
  
    }

    reset(base: number) {
      this.base = 5;
    }


}


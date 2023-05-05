import { Component } from '@angular/core';

@Component({
  selector: 'app--heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  public nombre: string = "ironman";
  public edad:   number = 32;
  
  
  public get capitallizedName() : string {
    return this.nombre.toUpperCase();
  }

  
  public getfusionar() : string {
    return `${ this.nombre } - ${ this.edad } `
  }

  getcambiarNombre():void{
    this.nombre = "Spiderman"
    
  }

  getcambiarEdad():void{
    this.edad = 25;
  }

  reset():void{
    this.nombre = "ronman";
    this.edad   = 32

  }
  
  
}

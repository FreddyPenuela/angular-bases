import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public soylista: string[] = ["thor", "ironman", "spiderman", "tumama"];

  public heroeborrado? : string;
  
  public removerHeroe():void {
   
     this.heroeborrado = this.soylista.pop()
  } 



  
}

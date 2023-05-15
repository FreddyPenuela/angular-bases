import { Component, EventEmitter, Input, Output } from '@angular/core';
import { characters } from '../../interfaces/characters.interfaces';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterlist: characters[] = [{
    nombre: "thrunks",
    poder: 50
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();






  DeleteCharacterById(id?: string): void{

    if ( !id ) return;

    console.log({ id })

    this.onDelete.emit(id)


  }

}

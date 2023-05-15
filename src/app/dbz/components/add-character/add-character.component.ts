import { Component, EventEmitter, Output } from '@angular/core';
import { characters } from '../../interfaces/characters.interfaces';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<characters> = new EventEmitter

  public character: characters = {
    nombre: "",
    poder: 0
  
  };

  emitcharacter():void{
    console.log(this.character)

    if ( this.character.nombre.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    this.character = { nombre: "", poder: 0 }
  }

}

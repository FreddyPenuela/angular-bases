import { Injectable } from '@angular/core';
import { v4 as uiid } from 'uuid';


import { characters } from '../interfaces/characters.interfaces';

@Injectable({providedIn: 'root'})
export class DbzService {

    public characters: characters[] = [{
        id:     uiid(),
        nombre: "veggeta",
        poder:  2000
    },{
        id:     uiid(),
        nombre: "krillin",
        poder:  400
    },{
        id:     uiid(),
        nombre: "gohan",
        poder:  500
    }];


    addCharacter( characters: characters ):void {

      const newCharacter: characters = { id: uiid(), ...characters };

      this.characters.push(characters);


    }


    DeletecharacterById(id: string) {

        this.characters = this.characters.filter( characters => characters.id !== id );
    }


}

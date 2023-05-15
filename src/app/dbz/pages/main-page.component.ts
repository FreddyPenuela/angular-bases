import { Component, OnInit } from '@angular/core';
import { characters } from '../interfaces/characters.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: "./main-page.component.html"
})

export class MainPageComponent {

    constructor ( private dbzservice: DbzService ) {}

    get characters(): characters[] {
      return [...this.dbzservice.characters];
    }

    onDeleteCharacter( id:string ):void {
      this.dbzservice.DeletecharacterById( id );

    }

    onNewCharacter( characters: characters) {
      this.dbzservice.addCharacter( characters )
    }


}

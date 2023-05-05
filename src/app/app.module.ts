import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contadormodule } from './contador/contador.module';
import { heroemodule } from './heroes/heroe.module';

  



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    contadormodule,
    heroemodule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


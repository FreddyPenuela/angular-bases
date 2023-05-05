import { NgModule } from "@angular/core";
import { contadorComponent } from "./contador.ts/contador.component";


@NgModule ({
    declarations: [
        contadorComponent
    ],

    exports: [
        contadorComponent
    ]
})

export class contadormodule{}
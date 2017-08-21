import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MentionsComponent } from "./mentions.component" 

@NgModule({
    declarations: [
        MentionsComponent
    ],
    exports: [

    ],
    imports: [
        CommonModule
    ]
})
export class MentionsModule {
    static forRoot() {
        return {
            ngModule: MentionsModule,
            providers: []
        };
    }
}

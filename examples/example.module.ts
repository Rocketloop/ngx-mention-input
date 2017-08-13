import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { MentionsModule } from '../index';

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        BrowserModule,
        MentionsModule
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule { }

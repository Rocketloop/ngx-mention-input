import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { MentionsComponent } from '../src/mentions.component';

@NgModule({
    declarations: [
        ExampleComponent,
        MentionsComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [ExampleComponent],
    entryComponents: []
})
export class ExampleModule { }
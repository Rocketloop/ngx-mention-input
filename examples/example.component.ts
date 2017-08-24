import { Component } from '@angular/core';
import { MentionsComponent, MentionItem } from '../src/mentions.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
    selector: 'example-root',
    templateUrl: './example.component.html',
    styleUrls: []
})
export class ExampleComponent {
    
    items: MentionItem[] = [{ 'primary': 'TestPrimary', 'secondary': 'TestSecondary' }];

    constructor() {
    }

    onFinish(result: any) {
    }

    onCancel() {
    }

}
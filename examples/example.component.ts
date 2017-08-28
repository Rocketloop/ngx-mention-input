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
    
    items: MentionItem[] = [
        { 'primary': 'Alex', 'secondary': 'alex@sample.com', 'avatar': 'http://lorempixel.com/32/32/people' },
        { 'primary': 'Alexa', 'secondary': 'alexa@sample.com', 'avatar': 'http://lorempixel.com/32/32/people' },
        { 'primary': 'Alice', 'secondary': 'alice@sample.com', 'avatar': 'http://lorempixel.com/32/32/people' },
        { 'primary': 'Ben', 'secondary': 'ben@sample.com', 'avatar': 'http://lorempixel.com/32/32/people' },
        { 'primary': 'Bob', 'secondary': 'bob@sample.com', 'avatar': 'http://lorempixel.com/32/32/people' },
        { 'primary': 'Bill', 'secondary': 'bill@sample.com', 'avatar': 'http://lorempixel.com/32/32/people' },
        { 'primary': 'Charlie', 'secondary': 'charlie@sample.com', 'avatar': 'http://lorempixel.com/32/32/people' },
        { 'primary': 'Cara', 'secondary': 'Cara@sample.com', 'avatar': 'http://lorempixel.com/32/32/people' },
        { 'primary': 'Christen', 'secondary': 'christen@sample.com', 'avatar': 'http://lorempixel.com/32/32/people' },
        { 'primary': 'Donald', 'secondary': 'donald@sample.com', 'avatar': 'http://lorempixel.com/32/32/people' },
        { 'primary': 'Dick', 'secondary': 'Dick@sample.com', 'avatar': 'http://lorempixel.com/32/32/people' },
        { 'primary': 'Dan', 'secondary': 'dan@sample.com', 'avatar': 'http://lorempixel.com/32/32/people' },
        { 'primary': 'Eve', 'secondary': 'eve@sample.com', 'avatar': 'http://lorempixel.com/32/32/people' },
        { 'primary': 'Erin', 'secondary': 'erin@sample.com', 'avatar': 'http://lorempixel.com/32/32/people' },
        { 'primary': 'Eric', 'secondary': 'eric@sample.com', 'avatar': 'http://lorempixel.com/32/32/people' },
        { 'primary': 'Frank', 'secondary': 'frank@sample.com', 'avatar': 'http://lorempixel.com/32/32/people' },
        { 'primary': 'Franklin', 'secondary': 'franklin@sample.com', 'avatar': 'http://lorempixel.com/32/32/people' },
        { 'primary': 'Faythe', 'secondary': 'faythe@sample.com', 'avatar': 'http://lorempixel.com/32/32/people' },
        { 'primary': 'Grace', 'secondary': 'grace@sample.com', 'avatar': 'http://lorempixel.com/32/32/people' },
        { 'primary': 'Greg', 'secondary': 'greg@sample.com', 'avatar': 'http://lorempixel.com/32/32/people' },
        { 'primary': 'Gina', 'secondary': 'gina@sample.com', 'avatar': 'http://lorempixel.com/32/32/people' }
    ];

    constructor() {
    }

    onFinish(result: any) {
    }

    onCancel() {
    }

}
import { Component, Input } from "@angular/core"

interface MentionItem {
    primary: string;
    secondary: string;
}

@Component({ 
    selector: "mentions",
    templateUrl: "./mentions.component.html"
})
export class MentionsComponent {
    @Input() items: MentionItem[];
    @Input() triggerChar: any;
    @Input() multiLine: boolean;
}
import { Component, Input } from "@angular/core"

export interface MentionItem {
    primary: string;
    secondary: string;
}

@Component({ 
    selector: "mentions",
    templateUrl: "./mentions.component.html",
    styleUrls: ["./mentions.component.scss"]
})
export class MentionsComponent {
    @Input() items: MentionItem[];
    @Input() triggerChar: string;
    @Input() multiLine: boolean;
}
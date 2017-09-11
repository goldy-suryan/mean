import { Component, Input } from "@angular/core";

@Component({
    selector: "app-video-details",
    template: `
    <div *ngIf="selectVideo">
        <iframe width="90%" height="400" [src]="selectVideo.url | safeUrl"></iframe>
    <ul>
        <li *ngIf="selectVideo">{{selectVideo.url}} </li>
    </ul>`
})

export class VideoDetailsComponent {
    @Input() selectVideo;

    ngOnInit() {
    }
}
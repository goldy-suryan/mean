import { Component, Input } from "@angular/core";


@Component({
    selector: "app-video-list",
    template: `
        <ul class="nav nav-pills nav-stacked">
            <li *ngFor="let video of videos"><a>{{video.title}}</a></li>
        </ul>
    `
})

export class VideoListComponent {
    @Input() videos;
}
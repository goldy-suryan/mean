import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector: "app-video-list",
    template: `
        <ul class="nav nav-pills nav-stacked">
            <li (click)="onSelect(video)" *ngFor="let video of videos"><a>{{video.title}}</a></li>
        </ul>
    `,
    styles: [`
     li { cursor: pointer; }
    `]
})

export class VideoListComponent {
    @Input() videos;
    @Output() selectedVideo = new EventEmitter();

    onSelect(video) {
        this.selectedVideo.emit(video);
    }

}
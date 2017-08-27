import { Component } from "@angular/core";
import { Http, Response } from "@angular/http";
import { DataService } from "../data.service";


@Component({
    selector: "app-data",
    template: `<div *ngFor="let video of videos">
        <ul>
            <li>{{video.title}}, {{video.url}}</li>
        </ul>
        <ul>
            <li>{{video.desciption}}</li>
        </ul>
    </div>`
})

export class DataComponent {
    videos: any;
    video: any;

    constructor(private http: Http, private dataService: DataService) {}

    ngOnInit() {
        this.dataService.getVideos().subscribe(videos => this.videos = videos);
    }
}
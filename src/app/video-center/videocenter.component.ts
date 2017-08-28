import { Component, OnInit } from "@angular/core";
import { Ivideo } from "../video.interface";
import { DataService } from "../data.service";

@Component({
    selector: "app-video-center",
    templateUrl: "./video-center.component.html"
})

export class VideoCenterComponent implements OnInit{
    video: Array<Ivideo>;
    constructor(private videoService: DataService) {}


    ngOnInit() {
        this.videoService.getVideos().subscribe(
            (videos) => this.video = videos
        )
    }
}
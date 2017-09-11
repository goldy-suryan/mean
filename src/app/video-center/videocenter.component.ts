import { Component, OnInit, ViewChild } from "@angular/core";
import { Ivideo } from "../video.interface";
import { DataService } from "../data.service";
import { VideoListComponent } from "../video-list/videolist.component";

@Component({
    selector: "app-video-center",
    templateUrl: "./video-center.component.html"
})

export class VideoCenterComponent implements OnInit{
    video: Array<Ivideo>;
    selectedVideoUrl: string;
    errorMsg:string;
    constructor(private videoService: DataService) {}


    ngOnInit() {
        this.videoService.getVideos().subscribe(
            (videos) => this.video = videos,
            
            (errors) => this.errorMsg = <any>errors
        )
    }

    onSelectVideo(data) {
        this.selectedVideoUrl = data;
    }
}
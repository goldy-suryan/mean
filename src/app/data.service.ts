import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()

export class DataService {

    videosurl: string = "/api/videos";
    videourl: string = "/api/video/:id"
    constructor(private http: Http) {}

    getVideos() {
        return this.http.get(this.videosurl).map(res => res.json());
    }

    getVideo() {
        return this.http.get(this.videourl).map(res => res.json())
    }
}
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";

@Injectable()

export class DataService {

    videosurl: string = "/api/videos";
    videourl: string = "/api/video/:id";
    postUrl: string ="/api/newvideo";

    constructor(private http: Http) {}

    getVideos() {
        return this.http.get(this.videosurl).map(res => res.json())
        .catch(this.handleErrors)
    }

    getVideo() {
        return this.http.get(this.videourl).map(res => res.json())
    }

    private handleErrors(err: Response) {
        let msg = `error is ${err}`
        console.log(msg);
        return Observable.throw(msg);
    }

    postVideo(data) {
        return this.http.post(this.postUrl, data).map(res => res.json()).catch(this.handleErrors);
    }
}
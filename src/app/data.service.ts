import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()

export class DataService {

    url: string = "/api/videos";
    constructor(private http: Http) {}

    getData() {
        return this.http.get(this.url).map(res => res.json());
    }

}
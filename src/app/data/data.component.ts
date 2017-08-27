import { Component } from "@angular/core";
import { Http, Response } from "@angular/http";
import { DataService } from "../data.service";


@Component({
    selector: "app-data",
    template: `<div *ngFor="let d of data">
        <ul>
            <li>{{d.title}}, {{d.url}}</li>
        </ul>
    </div>`
})

export class DataComponent {
    data: any;

    constructor(private http: Http, private dataService: DataService) {}

    ngOnInit() {
        this.dataService.getData().subscribe(data => this.data = data);
    }
}
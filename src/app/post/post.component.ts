import { Component } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
    template: `<h2>Add New Video</h2>
    <form #userForm="ngForm" (ngSubmit)="onSubmit(userForm.value)">
    <div class="form-group">
    <label for="title">Title</label>
    <input type="text" class="form-control" name="title" ngModel>
    </div>
    <div class="form-group">
    <label for="url">Url</label>
    <input type="text" class="form-control" name="url" ngModel>
    </div>
    <div class="form-group">
    <label for="description">Description</label>
    <input type="text" class="form-control" name="description" ngModel>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    <button type="button" class="btn btn-default" [routerLink]="['/video']">Cancel</button>
    `
})

export class PostComponent {
    video: any;
    constructor(private dataService: DataService, private router: Router){}
    onSubmit(value) {
        this.dataService.postVideo(value).subscribe(
            video => {
                return this.video = video
            }
        )
        this.router.navigate(['/video'])
    }
}
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home/home.component";
import { VideoCenterComponent } from "./video-center/videocenter.component";
import { VideoDetailsComponent } from "./video-details/videodetails.component";
import { VideoListComponent } from "./video-list/videolist.component";


const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full"},
    { path: "home", component: HomeComponent },
    { path: "video", component: VideoCenterComponent }
]


@NgModule({
    imports: [ RouterModule.forRoot(routes), CommonModule],
    exports: [RouterModule],
    declarations: [
        HomeComponent,
        VideoCenterComponent,
        VideoDetailsComponent,
        VideoListComponent
    ]
})

export class AppRoutingModule {}
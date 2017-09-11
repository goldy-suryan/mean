import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HomeComponent } from "./home/home.component";
import { VideoCenterComponent } from "./video-center/videocenter.component";
import { VideoDetailsComponent } from "./video-details/videodetails.component";
import { VideoListComponent } from "./video-list/videolist.component";
import { PostComponent } from "./post/post.component";
import { SafeUrlPipe } from './safe-url.pipe';


const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full"},
    { path: "home", component: HomeComponent },
    { path: "video", component: VideoCenterComponent },
    { path: "post", component: PostComponent }
]


@NgModule({
    imports: [ RouterModule.forRoot(routes), CommonModule, FormsModule],
    exports: [RouterModule],
    declarations: [
        HomeComponent,
        VideoCenterComponent,
        VideoDetailsComponent,
        VideoListComponent,
        PostComponent,
        SafeUrlPipe
    ],
    providers: [
        SafeUrlPipe
    ]
})

export class AppRoutingModule {}
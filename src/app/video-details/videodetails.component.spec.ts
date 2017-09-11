import { VideoDetailsComponent } from "app/video-details/videodetails.component";

describe("check for Input", () => {
    var foo;
    beforeEach(() => {
        foo = new VideoDetailsComponent();
    })

    it("should return back the good result", () => {
        expect(foo.Input()).toContain("goldy")
    })
})
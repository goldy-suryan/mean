import { VideoListComponent } from "./videolist.component";

describe("VideoListComponent", () => {
    var video;
    it("should return", () => {
        const component = new VideoListComponent();
        expect(component.onSelect("goldy")).toBe("goldy")
    })
})
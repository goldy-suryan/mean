let express = require("express");
let router = express.Router();
let Videos = require("./models/video");

router.get("/videos", (req, res) => {
    Videos.find((err, videos) => {
        console.log(err);
        res.json(videos);
    })
});

router.get("/videos/:id", (req, res) => {
    Videos.findById(req.params.id, (err, video) => {
        res.json(video);
    })
});

router.post("/video", (req, res) => {
    let newVideo = new Videos();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;

    newVideo.save((err, insertedVideo) => {
        // if(err) throw err
        res.json(insertedVideo);
    })
})

router.put("/video/:id", (req, res) => {
    Videos.findByIdAndUpdate(req.params.id, {
        $set: { title: req.body.title, url: req.body.url, description: req.body.description}
    }, {
        new: true
    }, (err, updatedVideo) => {
        res.json(updatedVideo)
    })
})


router.delete("/video/:id", (req, res) => {
    Videos.findByIdAndRemove(req.params.id, (err, deletedVideo) => {
        res.json(deletedVideo);
    })
})

module.exports = router;
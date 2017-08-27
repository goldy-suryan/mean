let express = require("express");
let router = express.Router();
let Videos = require("./models/video");

router.get("/videos", (req, res) => {
    Videos.find((err, data) => {
        console.log(err);
        res.json(data);
    })
})

module.exports = router;
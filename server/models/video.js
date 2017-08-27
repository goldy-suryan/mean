const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/videoplayer", {
    useMongoClient: true
});


const VideoSchema = mongoose.Schema({
    title: String,
    url: String,
    description: String
}, {collection: "videos"});


module.exports = mongoose.model("video", VideoSchema);
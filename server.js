let express = require("express");
let bodyParser = require("body-parser");
let port = 3000;
let path = require("path");
let api = require("./server/api");
let app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/api", api);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(port, function(err) {
    console.log("http://localhost:" + port + "/");
})
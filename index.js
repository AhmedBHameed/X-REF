var express = require("express");
var path = require("path");
var app = express();

const port = 8080 || process.env.PORT;

app.set("port", port);
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/coffee-challenge"));

app.get("/coffee-challenge", function(req, res) {
  res
    .set("Content-Type", "text/html")
    .sendFile(path.join(__dirname, "/public/coffee-challenge/index.html"));
});

app.get("/[^.]+s", function(req, res) {
  res
    .set("Content-Type", "text/html")
    .sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(app.get("port"), function() {
  console.log("Node app is running at localhost:" + app.get("port"));
});

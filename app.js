const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

//sender alt hvad brugeren har skrevet. Dette er end points
app.get("/", (req,res) => {
    res.sendFile("index.html", {root: path.join(__dirname, "./")});
});

app.get("/sms1", (req,res) => {
    res.sendFile("sms1.html", {root: path.join(__dirname, "./")});
});

app.get("/sms2", (req,res) => {
    res.sendFile("sms2.html", {root: path.join(__dirname, "./")});
});

app.get("/rtype", (req,res) => {
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

app.post("/rtype", urlencodedParser, (req,res) => {
    console.log(res.body);
});

//smider en log ud når root dir, bliver tilgået.. her kan man auth brugeren
app.use("/", (req,res) => {
    console.log("Heyyy, i got a log working");
        m = req.method;
        console.log(m);
        res.send('ok');
});

app.use("/rtype", (req,res) => {
        console.log(req.method);
        res.send('ok got you');
});

//starter serveren
app.listen(3000);
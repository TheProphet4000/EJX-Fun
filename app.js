const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req,res) => {
    res.sendFile("index.html", {root: path.join(__dirname, "./")});
});

app.use("/", (req,res) => {
    console.log("Heyyy, i got a log working");
});

app.listen(3000);
const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("Root");
});

app.use("/", (req,res) => {
    console.log("Heyyy, i got a log working");
});

app.listen(3000);
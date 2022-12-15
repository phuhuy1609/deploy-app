const express = require("express");
const app = express();

require('dotenv').config()
app.get("/", (req, res) => {
    res.send("hello world!-"+ process.env.nameHost);
});

app.listen("5000", () => {
    console.log("app listening port 5000")
})
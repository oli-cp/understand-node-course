const express = require("express");
const app = express();


const port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));


app.get("/", (req, res, next) => {
    res.send("Hello");
});

app.set("view engine", "ejs");

app.listen(port);
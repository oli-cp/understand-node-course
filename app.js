const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config");
const setupController = require("./controllers/setupController");
const apiController = require("./controllers/apiController");

const port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(config.getDbConnectionString())
    .then(() => {
        console.log("Connected to database.")
    })
    .catch(() => {
        console.log("Connection to database failed.")
});
setupController(app);
apiController(app);


app.get("/", (req, res, next) => {
    res.send("Hello");
});



app.listen(port);
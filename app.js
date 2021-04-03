//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    var today = new Date();
    var cday = today.getDay();
    var day = "";

    switch (cday) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuseday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;

        default:
            break;
    }
    res.render("list", {keyday: day});
});

app.listen(3000, function (req, res) {
    console.log("server is running on 3000 port");
});
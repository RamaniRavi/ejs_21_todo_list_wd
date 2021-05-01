//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
const items = ["Buy Food", "Cook Food"];
const workitems = [];

app.get("/", function (req, res) {
    
    day = date.getDate();
    res.render("list", {
        listTitle: day,
        listitem: items
    });
});

app.post("/", function (req, res) {
    const item = req.body.iitem;
    if (req.body.list === "work") {
        workitems.push(item);
        res.redirect("/work");
    } else {
        items.push(item); 
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "Work List",
        listitem: workitems
    });
});

app.get("/about", function(req,res){
    res.render("about");
});

app.listen(3000, function (req, res) {
    console.log("server is running on 3000 port");
});
//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
var items = ["Buy Food","Cook Food"];

app.get("/", function (req, res) {
    var today = new Date();
   
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US",options);

    res.render("list", {keyday: day , listitem: items});
});

app.post("/", function(req,res){
    item = req.body.iitem;
    items.push(item);

    res.redirect("/")
})


app.listen(3000, function (req, res) {
    console.log("server is running on 3000 port");
});
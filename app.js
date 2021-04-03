//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
let items = ["Buy Food","Cook Food"];
let workitems = []; 

app.get("/", function (req, res) {
    var today = new Date();
   
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US",options);

    res.render("list", {listTitle: day , listitem: items});
});

app.post("/", function(req,res){
    item = req.body.iitem;
    items.push(item);

    res.redirect("/")
});

app.get("/work", function(req,res){
    res.render("list",{listTitle: "Work List", listitem: workitems});
});

app.post("/work",function(req,res){
    let item = req.body.listitem;
    workitems.push(item);
    res.redirect(workitems);
})


app.listen(3000, function (req, res) {
    console.log("server is running on 3000 port");
});
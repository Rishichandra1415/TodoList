const express = require("express");
const bodyparser = require("body-parser");
const app = express();
var itms = ["Eat", "Sleep", "Eat"];
let workItem = ["coding", "coding"];
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {

    var today = new Date();
    var option = {
        weekday: "long",
        day: "2-digit",
        month: "long",
    };
    var day = today.toLocaleDateString("en-IN", option);
    res.render("list", { kay: day, newListItems: itms });

});


// post method  is use to form mai apnn joo bhi input diye hai woo server m jaka print krega home route mai
app.post("/", function(req, res) {
    var itm = req.body.Item;
    itms.push(itm);
    // its is use to redirect  the  home page..
    res.redirect("/");
});

app.get("/work", function(req, res) {
    res.render("list", { kay: "workList", newListItems: workItem });
})

app.listen(3000, function() {
    console.log("workingg");
});
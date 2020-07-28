const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const date = require(__dirname  + "/date.js");

app.use(express.static("public"));

const dailyItems = [];
const workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req, res) => {
    res.render("list", {listTitle : date.getDate(), todoItems: dailyItems});
});

app.post("/", (req, res) => {
    let todoItem = req.body.todoItem;
    if (req.body.list === "Work List") {
        workItems.push(todoItem);
        res.redirect("/work");
    } else {
        dailyItems.push(todoItem);
        res.redirect("/");
    }    
});

app.get("/work", (req, res) => {
    res.render("list", {listTitle : "Work List", todoItems : workItems });
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(process.env.PORT || port, () => {
    console.log(`server running on http://localhost:${port}`);
});

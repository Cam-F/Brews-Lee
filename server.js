// NPM packages
var express = require("express");
var bodyParser = require("body-parser");

var mysql = require("mysql");
var exphbs = require("express-handlebars");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require("./controllers/beerController.js");

app.use(router);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

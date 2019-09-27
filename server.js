// * Importing required packages
var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

// * Express config
var PORT = process.env.port || 8080;
var app = express();

// * Middleware config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, function(){
    console.log("App listening on localhost:" + PORT);
});
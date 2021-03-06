// * Importing required packages
var express = require("express");
var exphbs = require("express-handlebars");

// * Express config
var PORT = process.env.PORT || 8080;
var app = express();

// * Middleware config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, function(){
    console.log("App listening on localhost:" + PORT);
});
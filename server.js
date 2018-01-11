//Dependencies 
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

//import routes
var routes = require("./controllers/burgers_controller.js");

//start express

var port = 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

//set handlebars 

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.use("/", routes);

app.listen(port);

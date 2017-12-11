// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var initRoutes = require('./app/routing/htmlRoutes.js');
var apiRoutes = require("./app/routing/apiRoutes.js")

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

initRoutes(app, path)
apiRoutes(app, path)


app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});

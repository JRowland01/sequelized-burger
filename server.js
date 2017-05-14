var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var handlebars = require('express-handlebars');

var app = express();
	port = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.json());
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

app.engine('handlebars', handlebars({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.listen(port);





var	config = require("./config"),
	routes = require("./routes"),
	db = require("./db.js"),
	bodyParser = require("body-parser"), //a module to parse request bodies from the frontend
	path = require("path"), //a node-core module to help you read file paths
	mongoose = require("mongoose"), //an ORM to help you model and connect to your MongoDB data
	express = require("express"), //a framework module to help you write your server code easily and without pure vanilla javacript
	app = express(), //instantiates the express server
	port = port || 3000 || process.env.PORT; //gives you 3 fallbacks for setting the server's port
;

//Invoke Routes With App
routes(app);

//Declare Middleware
app.use( express.static( path.join(__dirname, "client") ) ); //project will be served from the client directory
app.use( bodyParser() ); //enable parsing the body of each request from the frontend

app.listen(port, function(){
	console.log("Serving on port %d in %s mode", port, app.settings.env);
});
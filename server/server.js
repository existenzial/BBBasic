var	config = require("./config"),
	invokeRoutes = require("./routes"),
	favicon = require('serve-favicon'),
	db = require("./db.js"),
	bodyParser = require("body-parser"), //a module to parse request bodies from the frontend
	http = require('http'),
	path = require("path"), //a node-core module to help you read file paths
	mongoose = require("mongoose"), //an ORM to help you model and connect to your MongoDB data
	express = require("express"), //a framework module to help you write your server code easily and without pure vanilla javacript
	app = express(), //instantiates the express server
	port = port || 3000 || process.env.PORT; //gives you 3 fallbacks for setting the server's port
;

//Declare Middleware
app.use( express.static( path.join("client") ) ); //project will be served from the client directory
app.use( favicon('./client/favicon.ico') ); // serve dummy favicon
app.use( "/api/books", invokeRoutes );
app.use( "/api/books/:id", invokeRoutes );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {extended: true} ) ); //enable parsing the body of each request from the frontend

app.listen(port, function(){
	console.log("Serving on port %d in %s mode", port, app.settings.env);
});

invokeRoutes(app);

/*****************************/
/* ----- To View Your Simple App Template -----
- Connect to your MongoDB database ( type "mongod" from the command line)
- Use Node or Nodemon to Start Up the Server.js (type "node server.js" or "nodemon server.js" from the command line)
*/
/*****************************/
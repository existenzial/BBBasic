//Server configuration
app.configure( function(){

	app.use( express.bodyParser() ); //parses request body and populates it
	app.use( express.methodOverride() ); //checks requests for HTTP overrides (e.g.: PUT or DELETE requests)
	app.use( app.router ); //lookup routes based on HTTP method & url requested
	app.use( express.errorHandler({
	//shows errors while in "Development" mode
		dumpExceptions: true, 
		showStack: true 
	}));

});
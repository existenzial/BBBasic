//Declare Routes

module.exports = function(app){
	//Route to GET(return) API as a test
	/*app.get( "/api", function(req, res) {
	res.send( "API requested from the frontend" );
});*/
	//Route to GET(return) every book
	app.get("/api/books", function(req, res){
		return BookModel.find( function(err, books){
		/*
		The .find() method takes 4 arguments: conditions, fields, options, & a callback. Since we want to send a list of every book saved in the database in our response to the frontend's request, we only need the callback in this case.
		*/	
			if( !err ){
				return res.send( books );
			} else {
				return console.log( err );
			}
		});
	});

	//Route to GET(return) a single book by ID
	app.get("/api/books/:id", function(req, res){
		return Book.findById( req.params.id, function(err, book){
			if( !err ){
				return res.send( book );
			} else {
				return console.log( err );
			}
		});
	});

	//Route to POST(add) a single book to the database
	app.post("/api/books", function(req, res){
		//create a new Book from the body of the POST request
		var book = new Book({
			title: req.body.title,
			author: req.body.author,
			releaseDate: req.body.releaseDate,
			keywords: req.body.keywords
		});

		return book.save( function(err){
		//save the new Book	
			if( !err ){
				console.log("book created and saved");
				//then return the new Book to the frontend so it can have access to that Book's id in the database
				return res.send( book );
			} else {
				console.log( err );
			}
		});
	});

	//Route to PUT(update) a single book in the database
	app.put("/api/books/:id", function(req, res){
		
		console.log( "Updating " + req.body.title + " record in the database..." );

		return Book.findById( req.params.id, function(err, book){
			book.title = req.body.title;
			book.author = req.body.author;
			book.releaseDate = req.body.releaseDate;
			book.keywords = req.body.keywords;
		
			return book.save( function(err){	
				if( !err ){
					console.log( book.title + " record updated" );
					return res.send( book );
				} else {
					console.log( err );
				}
			});
		});
	});

	//Route to DELETE a single book from the database
	app.delete("/api/books/:id", function(req, res){

		console.log( "Deleting " + req.body.title + " with id: " + req.params.id + " from the database..." );

		return Book.findById( req.params.id, function(err, book){
			return book.remove( function(err){
				if( !err ){
					console.log( req.body.title + " removed from the database" );
					return res.send( "" );
				} else {
					console.log( err );
				}
			});
		});

	});
};
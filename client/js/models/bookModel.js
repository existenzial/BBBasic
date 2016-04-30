app.Book = Backbone.Model.extend({
	
	defaults: {
		coverImage: "public/placeholder.png",
		title: "Untitled",
		author: "unknown",
		releaseDate: "n/a",
		keywords: "n/a"
	},
	/*
	The below parse() method is native to Backbone Models and will allow you to make changes to the requested server data before it's received on the frontend.

	Since we want our Book Models to sync properly by id, we have to account for the fact that MongoDB saves each in the database with that id attribute precluded by an _, but Backbone wants that id to display without the _.

	You must reassign the property without an _ before returning the data to the client/frontend to retain changes that you make on the server (e.g.: deleting a book) and avoid accidental duplication (e.g.: the book still displaying despite deletion).

	Alternatively and preferrably, you could also assign the idAttribute of the Model to _id.
	*/
	parse: function( res ){
		res.id = res._id;
		return res;
	},

});
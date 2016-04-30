app.BookCollectionView = Backbone.View.extend({
	
	el: "#books",
	
	initialize: function(booksOnLoad){

		this.collection = new app.BookCollection( booksOnLoad ); //sets a new instance of the collection
		/*this.collection.fetch({ reset: true }); //resets collection with collection retrieved from api/books/*/

		this.render(); //renders bookCollection on page load

		/*this.listenTo( this.collection, "add", this.renderBook );
		this.listenTo( this.collection, "reset", this.render );*/
	},

	render: function(){

		this.collection.each(function(book){
		//render each book in the collection to render the view completely	
			this.renderBook(book);
		}, this);

	},

	renderBook: function(book){

		var bookView = new app.BookView({ model: book });

		this.$el.append( bookView.render().el ); //append the newly created & rendered book(aka.: its bookView) to the #books el

	}

});
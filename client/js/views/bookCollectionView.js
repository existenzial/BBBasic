app.BookCollectionView = Backbone.View.extend({
	
	el: "#books",

	events: {
		//listen for a click event on the element with an id of "add" and then call the "addBook function"
		"click #add": "addBook"

	},
	
	initialize: function(booksOnLoad){

		this.collection = new app.BookCollection( booksOnLoad ); //sets a new instance of the collection
		/*this.collection.fetch({ reset: true }); //resets collection with collection retrieved from api/books/*/

		this.render(); //renders bookCollection on page load

		this.listenTo( this.collection, "add", this.renderBook );
		//listen for the add event on the book collection to trigger rendering the newly added book
		this.listenTo( this.collection, "reset", this.render );
		//listen for the reset event on the book collection before re-rendering the entire collection
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

	},

	addBook: function(e){
		//the below code prevents the default behavior of starting at the top of the page once the page is updated with the newly added book
		e.preventDefault();

		var formData = {}; //a place to store the data being added from the form, the keys will correspond to keys on the Book model

		$( "#addBook div" ).children( "input" ).each( function(i, el){
		//use jQuery to select the child input's [] within the #addBook div, then iterate through them
			if( $( el ).val() !== ""){
			//if there is actually an input in the field	
				formData[ el.id ] = $( el ).val();
				//assign the input to that element's id(aka.: property) on the formData {}
			}
		});

		this.collection.add( new app.Book( formData ) ); //create a new Book with the formData then add it to the collection

	},

});
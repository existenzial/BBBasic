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
				if( el.id === "keywords" ){
				//if the input field has the id(#) keywords
					formData[ el.id ] = []; //set the keywords element to an empty [] for holding the inputted keywords
					_.each( $( el ).val().split(","), function(keyword){
					//iterate through the comma-separated keywords	
						formData[ el.id ].push({ "keyword": keyword });
						//then push each keyword tuple(aka.: { key: value } pair) to the formData[keywords] []
					});
				} else if ( el.id === "releaseDate" ){
				//if the input field has the id(#) releaseDate
					formData[ el.id ] = $( "#releaseDate" ).datePicker( "getDate" ).getTime();
					//set the formData[releaseDate] property to the value received from the datePicker user selection
					//NOTE: getTime() is invoked as well in order to make sure we get the time back in milliseconds for UNIX(aka.: after 1/1/1970) timestamp formatting
				} else {
				//else set the formData[input] property to the value of whatever text the user inputs	
					formData[ el.id ] = $( el ).val();
					
				}
			}
			//after submit, clear the input field by setting its value to an empty string("")
			$( el ).val("");

		});
		/*
		this.collection.add( new app.Book( formData ) ); 
		//PROBLEM: Data Not Persisted on the Server after adding a book wth the user submitted formData
		*/
		this.collection.create( new app.Book( formData ) ); 
		//SOLUTION: Use the .create() method instead of the .add() method above
	},

});
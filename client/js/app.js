/////////////////***************THE APP***************/////////////////
/*
	Using jQuery, we use an IIFE(Immediately Invoked Function Expression) to automatically instantiate the app with the default properties of:

		- a new View for the BookCollection
		- any necessary setup items for the app itself (e.g.: the datePicker for the "releaseDate" input field)

*/

$(function(){
	/*
	UN-COMMENT the books [] to see :

	- some sample seed book data
	- an example of how the books stored in the database will appear on the view

	*/

/*	var books = [

		{
			title: "Cloud Atlas",
			author: "David M. Mitchell",
			releaseDate: "2005",
			keywords: "Love Timeless Future Mystery History Maritime Neoseoul Sonmi"
		},

		{
			title: "Naked Lunch",
			author: "William S. Burroughs",
			releaseDate: "1973",
			keywords: "Trippy Beat Generation Surrealism Kafkaesque"
		}

	];*/

	/*
	Using jQuery we select the releaseDate field below & use jQueryUI to bind a datePicker UI element to it in order to avoid tedious manual user input of dates, that might vary in formatting style
	*/
	$("#releaseDate").datepicker();

	/*
	Here, we instantiate a new View of the book Collection when the app loads
	*/
	new app.BookCollectionView();

});
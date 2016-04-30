$(function(){
	//Uncomment the books [] to see some seed data as an example for how the books stored in the database on your MongoDB backend will appear on the view
	
	var books = [

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

	];
	

	new app.BookCollectionView( books );

});
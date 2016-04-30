app.BookCollection = Backbone.Collection.extend({

	model: app.Book,
	url: "/api/books" //where models will be retrieved from when collection.fetch() is called
	
});
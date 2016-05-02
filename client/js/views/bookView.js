app.BookView = Backbone.View.extend({
	
	// tagName: "div",
	className: "bookContainer",

	template: _.template( $("#bookTemplate").html() ),

	events: {

		"click .delete": "deleteBook"

	},

	render: function(){
		this.$el.html( this.template(this.model.attributes) );
		//render and output html with the template filled with attributes pulled from the BookModel
		return this; //return the rendered element (defaults to a <div>, or whatever is specified in tagName)
	},

	deleteBook: function(){
		
		this.model.destroy();//Delete the model
		this.remove();//Delete the view
		
	}

});
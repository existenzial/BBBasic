var App = Backbone.Model.extend({
	defaults: {
		property1: 'default value of property1',
		property2: 'default value of property2',
		property3: 'default value of property3'
	}
});

/*
The model for the entire app can be seen above with adjustable default properties(e.g.: url, image, etc.) and values for your individual project.
*/

var ModelOne = Backbone.Model.extend({
	defaults: {
		property1: 'default value of property1',
		property2: 'default value of property2',
		property3: 'default value of property3'
	},
	created: console.log('A new instance of ModelOne was just created')
});
/*
The same can be adjusted for the individual models
*/
var ModelTwo = Backbone.Model.extend({
	defaults: {
		property1: 'default value of property1',
		property2: 'default value of property2',
		property3: 'default value of property3'
	},
	created: console.log('A new instance of ModelTwo was just created')
});

var CollectionOfModelOnes = Backbone.Collection.extend({
	model: ModelOne
});

var CollectionOfModelTwos = Backbone.Collection.extend({
	model: ModelTwo
});
/*
A Backbone collection like the those saved in the variables above are objects that contain the models. Think of them as a list of the models. E.g.: If you wanted to display a collection of books, each Book would be a model, and the list of the Book models would be the Collection (perhaps rename it to something more apropos like 'Library').
*/

var ModelOnes = new CollectionOfModelOnes([ModelOne, ModelOne]);
var ModelTwos = new CollectionOfModelTwos([ModelTwo, ModelTwo]);
/*
The above code creates new instances of each Collection of Models created and extended above 
*/

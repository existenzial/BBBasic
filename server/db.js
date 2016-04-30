var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/book_collection"); //connect to the database, change to the url of your own DB, can be hosted on your local machine(aka: localhost) or elsewhere

//Define Schemas for your database
var KeywordsSchema = new Schema({
	keyword: String
});

var BookSchema = new Schema({
	title: String,
	author: String,
	releaseDate: Date,
	keywords: [ KeywordsSchema ] //a sub-schema containing the list of keywords for each book
});


//Define Models using the Schema
var Book = mongoose.model( "Book", BookSchema );

module.exports = { Books: Book };

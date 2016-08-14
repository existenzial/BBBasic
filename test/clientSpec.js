var chai = require("chai"),
	mocha = require("mocha"),
	expect = chai.expect,
	assert = chai.assert,
	app = app || {};

describe("Your Book Library App", function(){

	describe('Book Model', function() {
		xit("should create a new Book instance", function(){
			var book = new app.BookModel({});
			expect(book).to.be.an.instance.of(app.BookModel);
		});
	});

	describe('Book View', function() {
		xit("should create a new Book View instance", function(){
			var bookView = new app.BookView({});
			expect(bookView).to.be.an.instance.of(app.BookView);
		});
	});

	describe('Book Collection', function() {
		xit("should create a new Book Collection instance", function(){
			var bookCollection = new app.BookCollection({});
			expect(bookCollection).to.be.an.instance.of(app.BookCollection);
		});
	});

	describe('Book Collection View', function() {
		xit("should create a new Book Collection View instance", function(){
			var bookCollectionView = new app.BookCollectionView({});
			expect(bookCollectionView).to.be.an.instance.of(app.BookCollectionView);
		});
	});

});
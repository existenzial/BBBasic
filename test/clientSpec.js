const chai = require("chai"),
	mocha = require("mocha"),
	expect = chai.expect,
	assert = chai.assert,
	superagent = require("superagent");

describe("Your Book Library App", function(){

	beforeeach(function(){

		let port = port || 3000 || process.env.PORT;
		let app = app || {};

	});

	describe('Book Model', function() {
		xit("should create a new Book instance", function(){
			let book = new app.BookModel({});
			expect(book).to.be.an.instance.of(app.BookModel);
		});
	});

	describe('Book View', function() {
		xit("should create a new Book View instance", function(){
			let bookView = new app.BookView({});
			expect(bookView).to.be.an.instance.of(app.BookView);
		});
	});

	describe('Book Collection', function() {
		xit("should create a new Book Collection instance", function(){
			let bookCollection = new app.BookCollection({});
			expect(bookCollection).to.be.an.instance.of(app.BookCollection);
		});
	});

	describe('Book Collection View', function() {
		xit("should create a new Book Collection View instance", function(){
			let bookCollectionView = new app.BookCollectionView({});
			expect(bookCollectionView).to.be.an.instance.of(app.BookCollectionView);
		});
	});

	describe('Routes', function() {

		xit("/", function(done){
			xit("GET", function(){
				xit("should be successful", function(done){
					superagent
					.get('http://localhost: ' + port)
					.end(function(res){
						expect(res.status).to.equal(200);
						done();
					});
				});
				xit("should redirect to '/api/books'", function(done){
					superagent
					.get('http://localhost: ' + port)
					.end(function(res){
						expect(res.redirect).to.equal('/api/books');
						done();
					});
				});
			});

		});

		xit("'/api/books' Route", function(done){
			xit("GET", function(){
				xit("should be successful", function(){
					superagent
						.get('http://localhost: ' + port + '/api/books')
						.end(function(res){
							expect(res.status).to.equal(200);
							done();
						});
				});
				xit("respond with JSON of all books", function(){
					superagent
						.get('http://localhost: ' + port + '/api/books')
						.end(function(res){
							expect(res.data).to.be.typeof("json");
							done();
						});
				});
			});

		});

		xit("'/api/books/:id' Route", function(done){
			xit("GET", function(){});
			xit("PUT", function(){});
			xit("DELETE", function(){});
			done();
		});

	});

});
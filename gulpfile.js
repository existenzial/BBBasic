var gulp = require("gulp"),
	watch = require("gulp-watch"),
	rename = require("gulp-rename"),
	concat = require("gulp-concat"),
	plumber = require("gulp-plumber"),
	csscss = require("gulp-csscss"),
	cleancss = require("gulp-clean-css"),
	mincss = require("gulp-minify-css"),
	minjs = require("gulp-uglify"),
	jshint = require("gulp-jshint"),
	mocha = require("mocha"),
	morgan = require("morgan");

var options = {

	build: {
		task: ["minify:css", "minify:js"],
		destination: "build/"
	},
	css: ["./css/*.css"],
	js: ["./client/**/*.js", "./server/**/*.js", "./**/.js"],

};

gulp.addTask("build", function(){
	//iterate through each task in the task []
	options.build.task.forEach( function(task){
		gulp.start( task );
	});

});

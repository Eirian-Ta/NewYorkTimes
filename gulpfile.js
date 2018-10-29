var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

gulp.task('styles', function (){
    return (
    	gulp.src('assets/styles/*.scss')
    	.pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('assets/styles'))
    );
});

gulp.task('compress', function () {
  	return (
  		gulp.src('./assets/scripts/*.js')
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('./dist/scripts'))
     );
});

gulp.task('minify-css', ['styles'], function () {
  	return (
		gulp.src('assets/styles/*.css')
	    .pipe(cleanCSS())
	    .pipe(rename({extname: '.min.css'}))
	    .pipe(gulp.dest('./dist/styles'))
    );
});



//Watch task
gulp.task('default', ['compress', 'minify-css'], function() {
    gulp.watch(['assets/scripts/*.js', 'assets/styles/*.scss'], ['compress','minify-css']);
});




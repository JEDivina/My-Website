
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch');

gulp.task('sass', function () {
  gulp.src('./css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  // watch scss files
  gulp.watch('./css/*.scss',['sass']);
});


gulp.task('default', ['sass', 'watch']);
//, 'watch'

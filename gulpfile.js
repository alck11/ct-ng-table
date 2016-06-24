'use strict';

var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var del = require('del');
var runSequence = require('run-sequence');

//minify css and js files
gulp.task('useref', function() {
  return gulp.src('app/index.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

//copy src files
gulp.task('copy-src', function() {
  return gulp.src('./app/src/**/*')
    .pipe(gulp.dest('dist/src'));
});

gulp.task('clean-dist', function() {
  return del.sync('dist');
});

gulp.task('clean-js', function() {
  return del(['dist/src/**/*.js']);
});

gulp.task('build', function(callback) {
  runSequence('clean-dist',
    ['useref', 'copy-src', 'clean-js'],
    callback
    );
});

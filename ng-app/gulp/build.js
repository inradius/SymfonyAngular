'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('partials', function ()
{
    // todo
});

gulp.task('html', ['partials'], function ()
{
    // todo
});

gulp.task('build', ['html']);
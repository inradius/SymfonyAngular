'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('partials', function () {
  return gulp.src([
    path.join(conf.paths.src, '/app/**/*.html'),
    path.join(conf.paths.tmp, '/serve/app/**/*.html')
  ])
    .pipe($.htmlmin({
      collapseWhitespace: true,
      maxLineLength: 120,
      removeComments: true
    }))
    .pipe($.angularTemplatecache('templateCacheHtml.js', {
      module: 'app',
      root: 'app'
    }))
    .pipe(gulp.dest(conf.paths.tmp + '/partials/'));
});

gulp.task('html', ['inject', 'partials'], function () {
    // todo
});

gulp.task('fonts', function () {
  return gulp.src($.mainBowerFiles())
    .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
    .pipe($.flatten())
    .pipe(gulp.dest(path.join(conf.paths.dist, '/fonts/')));
});

gulp.task('movejs', ['html'], function () {
  return gulp.src(conf.paths.view + '/js/*')
    .pipe(gulp.dest(conf.paths.dist + '/js/'));
});

gulp.task('movecss', ['html'], function () {
  return gulp.src(conf.paths.view + '/css/*')
    .pipe(gulp.dest(conf.paths.dist + '/css/'));
});

gulp.task('clean', function () {
  return $.del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')]);
});

gulp.task('final', ['movejs', 'movecss'], function () {
  return $.del([conf.paths.view + '/js', conf.paths.view + '/css', conf.paths.dist + '/app.html', conf.paths.tmp + '/'], { force: true });
});

gulp.task('build', ['html', 'fonts', 'final']);

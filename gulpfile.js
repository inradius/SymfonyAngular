'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

wrench.readdirSyncRecursive('./ng-app/gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./ng-app/gulp/' + file);
});


gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

var gutil = require('gulp-util');

exports.paths = {
  src: 'src',
  dist: '../../web/bundles/application',
  view: '../../src/Application/ApplicationBundle/Resources/views',
  tmp: '.tmp',
  e2e: 'e2e'
};

exports.wiredep = {
    directory: 'bower_components'
};

exports.errorHandler = function (title)
{
    'use strict';

    return function (err)
    {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};

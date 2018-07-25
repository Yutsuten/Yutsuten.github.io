var gulp = require('gulp');
var source = require('vinyl-source-stream');
var log = require('gulplog');

var browserify = require('browserify');
var watchify = require('watchify');

var b = watchify(browserify({
  entries: 'index.js',
  cache: {},
  packageCache: {},
  debug: true
}));

gulp.task('default', bundle);
b.on('update', bundle);
b.on('log', log.info);

function bundle() {
  return b.bundle()
    .on('error', log.error.bind(log, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./'));
}

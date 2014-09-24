'use strict';

var gulp       = require('gulp');
var less       = require('gulp-less');
var livereload = require('gulp-livereload');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

var OUTPUT = './app/dist/';

gulp.task('less', function() {
  gulp.src('./app/less/style.less')
      .pipe(less({ compress: true }))
      .pipe(gulp.dest( OUTPUT + 'style/'));
});

gulp.task('browserify', ['browserify:app']);

gulp.task('browserify:app', function() {
  // Single entry point to browserify
  return browserify({ debug: true })
    .add('./app/scripts/main.js')
    .require('./app/thirdparty/jquery/jquery.js', { expose: 'thirdparty/jquery' })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest( OUTPUT + 'js/'));

});

gulp.task('watch', function() {
  var server = livereload();

  // less
  gulp.watch('./app/less/**/*.less', ['less'])
    .on('change', function( file ) {
      server.changed(file.path);
    });

  // js
  gulp.watch('./app/scripts/**/*.js', ['browserify'])
    .on('change', function( file ) {
      server.changed(file.path);
    });

});

gulp.task('server', function() {
  var app = require('./server/main');
  app.use( require('connect-livereload')() );
  app.listen( 4000 );
});

gulp.task('default', function(){
  gulp.run('server');
  gulp.run('browserify');
  gulp.run('less');

  gulp.watch('./app/scripts/**/*.js', ['browserify:app']);
});

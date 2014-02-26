var gulp       = require('gulp');
var less       = require('gulp-less');
var browserify = require('gulp-browserify');
var livereload = require('gulp-livereload');

function startLivereload() {
  lr = require('tiny-lr')();
  lr.listen( 35729 );
}

gulp.task('less', function() {
  gulp.src('./app/less/style.less')
      .pipe(less({ compress: true }))
      .pipe(gulp.dest('./app/style/'));
});

gulp.task('scripts', function() {
  // Single entry point to browserify
  gulp.src('./app/scripts/main.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production,
      require: [
        ['./angular/app', { expose: 'app' }],

        ['../thirdparty/jquery/dist/jquery', { expose: 'jquery' }],
        ['../thirdparty/angular/angular', { expose: 'angularjs' }],
      ]
    }))
    .on('error', function( err ) {
      console.log( err );
    })
    .pipe(gulp.dest('./app/dist/'))
});

gulp.task('watch', function() {
  var server = livereload();
  
  // less
  gulp.watch('./app/less/**/*.less', ['less'])
    .on('change', function( file ) {
      server.changed(file.path);
    });

  // js
  gulp.watch('./app/scripts/**/*.js', ['scripts'])
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
  gulp.run('scripts');
  gulp.run('less');
  gulp.run('watch');
});

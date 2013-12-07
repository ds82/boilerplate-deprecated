define([
  'jquery',
  'angularjs',
  'app',
  'angular/routes',
  'angular/modules',
], function( $, angularjs, app ) {
  'use strict';

  app.run(function( $rootScope ) {

    // helper function for partial
    $rootScope.partial = function( partial ) {

      var ext = ( partial.match(/\.html$/) ) ? '' : '.html';
      return 'partials/' + partial + ext;
    };
  });


  $(document).ready(function() {

    console.log('bootstrapping angular...');
    var $html = $('html');
    $html.addClass('ng-app="app"');
    // @todo make it dynamic
    angularjs.bootstrap( $html, ['app'] );

  });

  return app;
});

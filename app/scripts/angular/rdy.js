// define([
//   'jquery',
//   'angularjs',
//   'app',
//   'angular/routes',
//   'angular/modules',
// ], function( $, angularjs, app ) {
'use strict';

var $         = require( 'jquery' ),
    app       = require( 'app' ),
    routes    = require( './routes' ),
    ngModules = require( './modules' );

app.run(function( $rootScope ) {

  // helper function for partial
  $rootScope.partial = function( partial ) {

    var ext = ( partial.match(/\.html$/) ) ? '' : '.html';
    return 'partials/' + partial + ext;
  };
});


$(document).ready(function() {

  // console.log('bootstrapping angular...');
  // var $html = $('html');
  // $html.addClass('ng-app="app"');
  // // @todo make it dynamic
  // angular.bootstrap( $html, ['app'] );

});


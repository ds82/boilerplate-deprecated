'use strict';

var app = require( 'app' );

app.config(function( $routeProvider ) {
  $routeProvider
    
    .when('/', {
      templateUrl: 'partials/main.html',
      controller: 'MainCtrl'
    })

    .otherwise({ redirect: '/' })

  ;
});

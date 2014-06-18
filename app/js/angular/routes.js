define([
  'app'
], function( app ) {
  'use strict';

  app.config(function( $routeProvider ) {
    $routeProvider
      
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainController'
      })

      .otherwise({ redirect: '/' })

    ;
  });
});
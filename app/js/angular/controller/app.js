define([
  'app'
], function( app ) {
  'use strict';

  app.controller('AppController', [
    '$scope',
    function( $scope ) {
      $scope.version = 'alpha2';
    }
  ]);
});
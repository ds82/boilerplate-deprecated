define(['app'], function( app ) {
  'use strict';

  app.controller('MainController', [
    '$scope',
    function( $scope ) {
      $scope.controller = 'Main';
    }
  ]);
});
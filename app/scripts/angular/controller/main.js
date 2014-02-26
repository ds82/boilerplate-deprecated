'use strict';

var app = require( 'app' );

app.controller('MainCtrl', [
  '$scope',
  function( $scope ) {
    $scope.controller = 'Main';
  }
]);

'use strict';

var app = require( 'app' );

app.controller('AppCtrl', [
  '$scope',
  function( $scope ) {
    $scope.version = 'alpha2';
  }
]);

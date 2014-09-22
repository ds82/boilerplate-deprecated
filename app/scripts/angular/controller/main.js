'use strict';

var app = require( 'ng/app' );

app.controller('MainCtrl', [
  '$scope',
  function( $scope ) {
    $scope.controller = 'Main';
  }
]);

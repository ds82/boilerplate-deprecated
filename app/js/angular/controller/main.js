'use strict';
var app = require('app');

app.controller('MainController', [
  '$scope',
  function( $scope ) {
    $scope.controller = 'Main';
  }
]);

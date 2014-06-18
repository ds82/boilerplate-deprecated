'use strict';
var app = require('app');

app.controller('AppController', [
  '$scope',
  function( $scope ) {
    $scope.version = 'alpha2';
  }
]);

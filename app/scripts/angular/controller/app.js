'use strict';

var app = require( 'ng/app' );

app.controller('AppCtrl', ['$scope', function( $scope ) {
    $scope.version = 'alpha2';

    $scope.angular = angular;
  }
]);

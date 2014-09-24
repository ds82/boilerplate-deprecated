'use strict';
 /**
 * app
 * @author Dennis Sänger, 2013
 */

require('thirdparty/angularjs/angular');
require('thirdparty/angularjs/angular-resource');
require('thirdparty/angularjs/angular-route');

var app = angular.module('app', [
  'ngResource', 'ngRoute'
]);

module.exports = app;

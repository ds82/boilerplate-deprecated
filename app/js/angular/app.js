'use strict';
 /**
 * app
 * @author Dennis Sänger, 2013-2014
 */

/*var angular    = */require('angular');
var extensions = require('./extensions');

var app = angular.module('app', [
  'ngResource', 'ngRoute'
]);

module.exports = app;
'use strict';
 /**
 * app
 * @author Dennis Sänger, 2013
 */

var angularjs = require('angularjs'),
    exts      = require('./extensions');

var app = angular.module('app', [
  'ngResource', 'ngRoute'
]);

module.exports = app;

require.config({
  baseUrl: 'scripts/',
  paths: {
    jquery:               '../thirdparty/jquery/jquery',
    angularjs:            '../thirdparty/angular/angular',
    app:                  'angular/app',
    modules:              'angular/modules',
    ngext:                '../thirdparty/angular/',
    bspath:               '../thirdparty/bootstrap/js/'
  },
  shim: {
    'bootstrap': {
      deps: ['jquery'],
      exports: 'jquery'
    },
    'angularjs': {
      deps: ['jquery'],
      exports: 'angular'
    },
    modules: {
      deps: ['app']
    },
    'angular/extensions': {
      deps: ['angularjs']
    }
  }
});

require(['jquery', 'angular/rdy', 'bootstrap'], function ( $, rdy ) {
  'use strict';

  return rdy;
});
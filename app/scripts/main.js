require.config({
	baseUrl: 'scripts/',
	paths: {
		jquery: '../thirdparty/jquery/jquery',
		bootstrap: '../thirdparty/bootstrap/js/bootstrap',
		angularjs: '../thirdparty/angular/angular',
		app: 'angular/app',
		modules: 'angular/modules',
		'angular-extensions': '../thirdparty/angular/'
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
		'angular-extensions': {
			deps: ['angularjs']
		}
	}
});

require(['jquery', 'angular/rdy', 'bootstrap'], function ( $, rdy ) {
	'use strict';

	return rdy;
});
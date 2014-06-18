'use strict';

var app     = require('app');
var routes  = require('./routes');
var modules = require('./modules');

app.run(function( $rootScope ) {

  // helper function for partial
  $rootScope.partial = function( partial ) {

    var ext = ( partial.match(/\.html$/) ) ? '' : '.html';
    return 'partials/' + partial + ext;
  };
});

module.exports = app;
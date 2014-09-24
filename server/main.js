'use strict';

var path    = require('path');
var express = require('express');
var modules = [];
var app     = express();


var allowCrossDomain = function( req, res, next ) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  if ( next ) {
    next();
  }
};

app.configure(function() {
  var appDir = path.resolve( __dirname, '../app' );
  app.use( express.static( appDir ));
  app.use( allowCrossDomain );
  app.use( express.bodyParser() );
  app.use( express.cookieParser() );
  app.use( express.methodOverride() );
  app.use( express.session({ secret: 'keyboard cat' }) );
});

app.options('*', function(req, res) {
  res.send(200);
  res.end();
});


for( var i = 0, ii = modules.length; i < ii; ++i ) {
  require( './modules/' + modules[i] ).use( app );
}



if ( !module.parent ) {
  app.listen( 9000 );
}

module.exports = app;

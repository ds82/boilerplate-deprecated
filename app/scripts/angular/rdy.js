'use strict';

var $         = require( 'thirdparty/jquery' ),
    app       = require( 'ng/app' ),
    routes    = require( './routes' ),
    ngModules = require( './modules' );

app.run(function( $rootScope ) {
  // helper function for partial
  $rootScope.partial = function( partial ) {

    var ext = ( partial.match(/\.html$/) ) ? '' : '.html';
    return 'partials/' + partial + ext;
  };
});


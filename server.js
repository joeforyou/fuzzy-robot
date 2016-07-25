var express  = require( 'express' ),
	bodyParser = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    mongoose = require('./server/config/mongoose.js'),
    routes = require('./server/config/routes.js')
    app      = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
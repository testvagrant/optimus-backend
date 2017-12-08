var express = require('express');
var bodyParser = require('body-parser');
var busboyBodyParser = require('busboy-body-parser');


// create express app
var app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(busboyBodyParser());


var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');
var Grid = require('gridfs-stream');

// mongoose.connect(dbConfig.url);

var promise = mongoose.connect(dbConfig.url, {
	useMongoClient: true
});

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

promise.then(function(db) {
	console.log("Successfully connected to the database");
    var gfs = Grid(db, mongoose.mongo);
});

// mongoose.connection.once('open', function() {
//     console.log("Successfully connected to the database");
//     var gfs = Grid(mongoose.connection.db, mongoose.mongo);

// })



// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome to Optimus."});
});

// Require  routes
require('./app/routes/build.routes.js')(app);
require('./app/routes/device.routes.js')(app);
require('./app/routes/scenario.routes.js')(app);

// listen for requests
app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});
'use strict';


var mongoose = require('mongoose'),
    _ = require('lodash');
 
var Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
var gfs = new Grid(mongoose.connection.db);
 
exports.create = function(req, res) {
 
	     	   	
	    	var part = req.files.filename;
 
                var writeStream = gfs.createWriteStream({
                    filename: re.files.filename,
    				mode: 'w',
    				data: Buffer	
                    content_type: String
                });
 
 
                writeStream.on('close', function() {
                     return res.status(200).send({
						message: 'Success'
					});
                });
                
                writeStream.write(part.data);
 
                writeStream.end();
 
};
 
};
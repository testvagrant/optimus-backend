module.exports = function(app) {
		var upload  = require('../controllers/upload.controller.js');
 
 
	app.route('/upload/:filename')
		.get(upload.read);
	
	
	app.route('/upload')
		.post(upload.create);
};
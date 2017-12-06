module.exports = function(app) {

    var builds = require('../controllers/build.controller.js');

    // Create a new build
    app.post('/builds', builds.create);

    // Retrieve all builds
    app.get('/builds', builds.findAll);

    // Retrieve a single build with buildId
    app.get('/builds/:buildId', builds.findOne);

    // Update a build with buildId
    app.put('/builds/:buildId', builds.update);

    // Delete a build with buildId
    app.delete('/builds/:buildId', builds.delete);
}
var Build = require('../models/build.model.js');

exports.create = function(req, res) {
    var build = new Build({buildStartTime: req.body.buildStartTime, 
        buildEndTime: req.body.buildEndTime, 
        scenariosCount: req.body.scenariosCount, 
        scenarioSuccessRate: req.body.scenarioSuccessRate});

    build.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the build."});
        } else {
            res.send(data);
        }
    });

};

exports.findAll = function(req, res) {
    // Retrieve and return all builds from the database.
     Build.find(function(err, builds){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving builds."});
        } else {
            res.send(builds);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single build with a buildId
    Build.findById(req.params.buildId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve build with id " + req.params.buildId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a build identified by the buildId in the request
     Build.findById(req.params.buildId, function(err, build) {
        if(err) {
            res.status(500).send({message: "Could not find a build with id " + req.params.buildId});
        }

        build.buildEndTime = req.body.buildEndTime;
        build.scenariosCount = req.body.scenariosCount;
        build.scenarioSuccessRate = req.body.scenarioSuccessRate;

        build.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update build with id " + req.params.buildId});
            } else {
                res.send(data);
            }
        });
    });

};

exports.delete = function(req, res) {
    // Delete a build with the specified buildId in the request
    Build.remove({_id: req.params.buildId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete build with id " + req.params.id});
        } else {
            res.send({message: "Build deleted successfully!"})
        }
    });

};
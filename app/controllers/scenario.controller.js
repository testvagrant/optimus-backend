var Scenario = require('../models/scenario.model.js');

exports.create = function(req, res) {
     
    
    var scenario = new Scenario({scenarioName: req.body.scenarioName, 
        deviceUdid: req.body.deviceUdid, 
        tags: req.body.tags, 
        startTime: req.body.startTime, 
        endTime: req.body.endTime, 
        timeTaken: req.body.timeTaken, 
        buildId: req.body.buildId,
        completed: req.body.completed,
        scenarioTimelime: req.body.scenarioTimelime, 
        steps: req.body.steps,
        failedOnScreen: req.body.failedOnScreen
    });

    scenario.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the scenario."});
        } else {
            res.send(data);
        }
    });

};

exports.findAll = function(req, res) {
    
     Scenario.find(function(err, scenarios){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving scenarios."});
        } else {
            res.send(scenarios);
        }
    });
};

exports.findOne = function(req, res) {
    
    Scenario.findById(req.params.scenarioId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve scenario with id " + req.params.scenarioId});
        } else {
            res.send(data);
        }
    });
};


exports.find = function(req, res) {
    
    var query = {};
    if (req.scenarioName)
        query.scenarioName = req.scenarioName

    if(req.deviceUdid)
        query.deviceUdid = req.deviceUdid

    Scenario.find(query)
    // .select('startTime')
    .sort({ 
        startTime: -1 })
    .limit(1)
    .exec(function(err, res){
    console.log(res);
    });
};


exports.update = function(req, res) {
    
     Scenario.findById(req.params.scenarioId, function(err, scenario) {
        if(err) {
            res.status(500).send({message: "Could not find a scenario with id " + req.params.scenarioId});
        }

        if(req.body.status)
            scenario.status = req.body.status;

        if(req.body.completed)
            scenario.completed = req.body.completed;

        if(req.body.endTime)
            scenario.endTime = req.body.endTime;

        if(req.body.timeTaken)
            scenario.timeTaken = req.body.timeTaken;

        if(req.body.scenarioTimelime)
            scenario.scenarioTimelime = req.body.scenarioTimelime;

        if(req.body.steps)
            scenario.steps = req.body.steps;

        if(req.body.failedOnScreen)
            scenario.failedOnScreen = req.body.failedOnScreen;
        

        scenario.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update scenario with id " + req.params.scenarioId});
            } else {
                res.send(data);
            }
        });
    });

};

exports.delete = function(req, res) {
    
    Scenario.remove({_id: req.params.scenarioId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete scenario with id " + req.params.id});
        } else {
            res.send({message: "Scenario deleted successfully!"})
        }
    });

};
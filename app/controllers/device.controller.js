var Device = require('../models/device.model.js');

exports.create = function(req, res) {
     
    if(!req.body.content) {
        return res.status(400).send({message: "device can not be empty"});
    }
    var device = new Device({title: req.body.title || "Untitled Device", content: req.body.content});

    device.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the device."});
        } else {
            res.send(data);
        }
    });

};

exports.findAll = function(req, res) {
    
     Device.find(function(err, devices){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving devices."});
        } else {
            res.send(devices);
        }
    });
};

exports.findOne = function(req, res) {
    
    Device.findById(req.params.deviceId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve device with id " + req.params.deviceId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    
     Device.findById(req.params.deviceId, function(err, device) {
        if(err) {
            res.status(500).send({message: "Could not find a device with id " + req.params.deviceId});
        }

        device.status = req.body.status;
        

        device.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update device with id " + req.params.deviceId});
            } else {
                res.send(data);
            }
        });
    });

};

exports.delete = function(req, res) {
    
    Device.remove({_id: req.params.deviceId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete device with id " + req.params.id});
        } else {
            res.send({message: "Device deleted successfully!"})
        }
    });

};
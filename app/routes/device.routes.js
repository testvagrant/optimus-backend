module.exports = function(app) {

    var devices = require('../controllers/device.controller.js');

    // Create a new device
    app.post('/devices', devices.create);

    // Retrieve all devices
    app.get('/devices', devices.findAll);

    // Retrieve a single device with deviceId
    app.get('/devices/:deviceId', devices.findOne);

    // Update a device with deviceId
    app.put('/devices/:deviceId', devices.update);

    // Delete a device with deviceId
    app.delete('/devices/:deviceId', devices.delete);
}
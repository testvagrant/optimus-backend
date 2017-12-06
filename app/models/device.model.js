var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var DeviceSchema = mongoose.Schema({
    platform: Date,
    deviceName: Date,
    status: Number,
    platformVersion: String,
    runsOn: String,
    udid: String,
    buildId: ObjectId
}, {
    timestamps: false
});

module.exports = mongoose.model('Device', DeviceSchema);
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
    

var DeviceSchema = new Schema({
    platform: String,
    deviceName: String,
    status: String,
    platformVersion: String,
    runsOn: String,
    udid: String,
    buildId: {type: Schema.Types.ObjectId, ref: 'Build'},
}, {
    timestamps: false
});

module.exports = mongoose.model('Device', DeviceSchema);
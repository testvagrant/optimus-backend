var mongoose = require('mongoose');

var BuildSchema = mongoose.Schema({
    buildStartTime: Date,
    buildEndTime: Date,
    scenariosCount: Number,
    scenarioSuccessRate: String
}, {
    timestamps: false
});

module.exports = mongoose.model('Build', BuildSchema);
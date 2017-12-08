var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nonFunctional = new Schema({
	interval : Number , 
    	cpuData : {
    		user: String,
    		kernel: String
    	},
    	memoryData: {
    		total: String,
    		actual: String
    	},
    	activity: String,
    	screenshotFileName: String 
})

var steps = new Schema({
	status: String,
	keyword: String,
	name: String,
	error_message: String
})

var ScenarioSchema = new Schema({
    scenarioName: String,
    deviceUdid: String,
    tags: Array,
    startTime: Date,
    buildId: {type: Schema.Types.ObjectId, ref: 'Build'},
    status: String,
    completed: Boolean,
    endTime: Date,
    timeTaken: Number,
    scenarioTimeline: [nonFunctional],
    steps: [steps],
    failedOnScree: Buffer
}, {
    timestamps: false
});

module.exports = mongoose.model('Scenario', ScenarioSchema);
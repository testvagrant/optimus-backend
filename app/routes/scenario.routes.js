module.exports = function(app) {

    var scenarios = require('../controllers/scenario.controller.js');

    app.post('/scenarios', scenarios.create);

    app.get('/scenarios', scenarios.findAll);

    app.get('/scenarios/:scenarioId', scenarios.findOne);

    app.put('/scenarios/:scenarioId', scenarios.update);

    app.delete('/scenarios/:scenarioId', scenarios.delete);
}
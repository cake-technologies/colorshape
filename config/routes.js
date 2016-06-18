var config = require('./config.js');

module.exports = function (app, routes) {

    app.get('/', function (req, res) {
        return res.json('version: ' + config.version)
    });

    app.get(config.base + '/shapes/:shape/color/:color', routes.shapes.show);
};

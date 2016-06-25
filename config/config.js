var config = {};

// port on api listens
config.port = 3002;
config.context = 'colorshape';
config.version = 'v1';
config.base = '/' + config.context + '/' + config.version;

config.name = 'colorshape.io backend';
// access origin for CORS stuff
config.origin = '*';

module.exports = config;

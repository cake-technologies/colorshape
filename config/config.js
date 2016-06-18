var config = {};

// port on api listens
config.port = 3001;
config.version = 'v1';
config.base = '/' + config.version;

config.name = 'colorshape.io backend';
// access origin for CORS stuff
config.origin = '*';

module.exports = config;

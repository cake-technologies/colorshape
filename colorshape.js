var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser'); //bodyparser + json + urlencoder
var morgan = require('morgan'); // logger
var config = require('./config/config.js');


// .listen(server);


app.use(bodyParser());
// app.use(morgan());
//app.use(cors());
app.listen(config.port);

//Routes
var routes = {
  shapes: require('./route/shapes.js')
};

app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Credentials', true);
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    if ('OPTIONS' == req.method) return res.send(200);
    next();
});

// falls es mal gebraucht wird.
//var checkAdmin = adminCheck();

// inside the routes, use checkAdmin only after the verifyToken =)
require('./config/routes')(app, routes);

console.log(config.name + ' is starting on port ' + config.port);

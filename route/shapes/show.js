var config = require('../../config/config.js');

exports.show = function (req, res) {

    //  return res.json(422, {err: 'database request threw exception', errmsg: err});

    return res.json(200, 'some shape');

};

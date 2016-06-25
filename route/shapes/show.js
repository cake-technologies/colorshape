const svg2png = require('svg2png');
const fs = require('pn/fs');

const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');

var colorize = function (buffer) {
  // console.log(buffer);
  // console.log(decoder.write(buffer));
  return buffer;
};

var replaceColor = function (input, color) {
  return input.replace('%color%', color);
}

var bufferize = function (utf8) {
  return new Buffer(utf8, "utf-8");
}

exports.show = function (req, res) {

  var shape = req.params.shape;
  var color= req.params.color;

  var w = req.query.w;
  var h = req.query.h;

  console.log(shape);

  if(w && w) var size = { width: w, height: h };

    fs.readFile('svg/' + shape + '.svg', 'utf8')
        .then(utf8 => replaceColor(utf8, color))
        .then(colored => bufferize(colored))
        .then(input => svg2png(input, size))
        .then(buffer => {
          res.writeHead(200, {'Content-Type': 'image/png' });
            return  res.end(buffer, 'binary');
        })
        .catch(e => console.error(e));
};

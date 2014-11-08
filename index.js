var shipGenerator = require('./src/shipGenerator');
var prettyjson  = require('prettyjson');

var ship = shipGenerator.generateShip();
console.log(prettyjson.render(ship));

exports.generateShip = shipGenerator.generateShip();
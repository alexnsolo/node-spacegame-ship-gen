var shipNameGenerator =	    require('./shipNameGenerator.js');
var subsystemGenerator =	require('./subsystemGenerator.js');

exports.generateShip = function() {
    var ship = {
        name: shipNameGenerator.generateShipName(),
        health: 1450,
        subsystems: [
            subsystemGenerator.generateCargoHold(),
            subsystemGenerator.generateSublightEngine(),
            subsystemGenerator.generateMiningLaser()
        ]
    };
    return ship;
};

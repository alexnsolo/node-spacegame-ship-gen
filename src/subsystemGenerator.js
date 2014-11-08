var nameGenerator = require('./nameGenerator');

exports.generateCargoHold = function() {
    var subsystem = {
        type: 'cargohold',
        description: 'Standard Cargo',
        health: 500,
        cargo: {
            capacity: 300
        }
    };
    return subsystem;
};

exports.generateMiningLaser = function() {
    var subsystem = {
        type: 'mining_laser',
        description: nameGenerator.generateMiningLaserName(),
        health: 100,
        mining: {
            power: Math.floor(Math.random() * 12) + 5
        }
    };
    return subsystem;
};

exports.generateSublightEngine = function() {
    var subsystem = {
        type: 'sublight',
        description: nameGenerator.generateEngineName(),
        health: 250,
        thrust: {
            power: Math.floor(Math.random() * 35) + 20
        }
    };
    return subsystem;
};
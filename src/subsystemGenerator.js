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
        description: 'Dalton ML-1300',
        health: 100,
        mining: {
            power: 12
        }
    };
    return subsystem;
};

exports.generateSublightEngine = function() {
    var subsystem = {
        type: 'sublight',
        description: 'Quicksilver Dasher',
        health: 250,
        thrust: {
            power: 45
        }
    };
    return subsystem;
};
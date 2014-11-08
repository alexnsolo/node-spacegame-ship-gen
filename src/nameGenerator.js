var SPACE_NOUNS = ['Comet', 'Dawn', 'Galaxy', 'Horizon', 'Nebula', 'Nova', 'Star', 'Sun'];
var ABSTRACT_NOUNS = ['Blessing', 'Danger', 'Dawn', 'Death', 'Destiny', 'Doom',  'Hope', 'Light', 'Luck'];
var ASPECTS = ['Endurance', 'Speed', 'Strength', 'Guile', 'Wisdom'];
var ANIMALS = ['Dragon', 'Falcon', 'Fox', 'Griffen', 'Lion', 'Pheonix'];
var OTHER_NOUNS = ['Lady', 'Bullet', 'Runner', 'Ranger', 'Gypsy', 'Wing', 'Racer', 'Voyager', 'Wasp', 'Vector', 'Dasher', 'Sword', 'Warden', 'Beacon', 'Raider'];
var ENGINE = {
	NOUNS: ['Dasher', 'Prancer', 'Thruster', 'Jet', 'Lightning'],
	ABRV: ['NG', 'JT', 'TR']
};
var MINING_LASER = {
	NOUNS: ['Enervator', 'Escavator', 'Digger'],
	ABRV: ['ML', 'DG']
};
var SPEEDY_ADJECTIVES = ['Speedy', 'Quick', 'Silver', 'Dashing'];
var MANUFACTURER_NAMES = ['Dalton', 'Federation', 'Xinxiao'];

function random(list) {
	return function() {
		var i = Math.floor(Math.random() * list.length);
		return list[i];
	}
}

function grammar(funs) {
	return function() {
		var str = '';
		for (var i = 0; i<funs.length-1; ++i)
			str += funs[i]() + ' ';;
		str += funs[funs.length-1]();
		return str;
	}
}

function possessive(list) {
	var f = random(list);
	return function() {
		var string = f();
		if (string.charAt(string.length-1) == 's')
			return string + '\'';
		return string + '\'s';
	}
}

function composite(funs, probs) {
	return function() {
		var n = Math.random();
		var probMax = 0;
		for (var i = 0; i<probs.length; ++i) {
			probMax += probs[i];
			if (n < probMax)
				return funs[i]();
		}
		return funs[funs.length - 1]();
	}
}

function quoted(funs) {
	return function() {
		var str = '';
		for (var i = 0; i<funs.length-1; ++i)
			str += funs[i]() + ' ';;
		str += funs[funs.length-1]();
		return '"' + str + '"';
	};
}

function dashed(funs) {
	return function() {
		var str = '';
		for (var i = 0; i<funs.length-1; ++i)
			str += funs[i]() + '-';;
		str += funs[funs.length-1]();
		return str;
	}
}

function randomNumber(min, max, step) {
	return function() {
		return Math.floor(((max-min) * Math.random() + min) / step) * step;
	}
}

var milleniumFalcon = grammar([random(SPACE_NOUNS), random(ANIMALS)]);
var doomFalcon = grammar([random(ABSTRACT_NOUNS), random(ANIMALS)]);
var cometsBlessing = grammar([possessive(SPACE_NOUNS), random(ABSTRACT_NOUNS)]);
var falconsGuile = grammar([possessive(ANIMALS), random(ASPECTS)]);

var manufacturerEngineName = grammar([
	random(MANUFACTURER_NAMES), 
	quoted([
		random(SPEEDY_ADJECTIVES), 
		random(ENGINE.NOUNS)
	])
]);

var manufacturerEngineNumber = grammar([
	random(MANUFACTURER_NAMES), 
	dashed([
		random(ENGINE.ABRV), 
		randomNumber(1000, 3000, 100)
	])
]);

var miningLaserName = grammar([
	random(MANUFACTURER_NAMES),
	quoted([
		random(MINING_LASER.NOUNS)
	])
]);

var miningLaserNumber = grammar([
	random(MANUFACTURER_NAMES), 
	dashed([
		random(MINING_LASER.ABRV), 
		randomNumber(200, 900, 100)
	])
]);

exports.generateShipName = composite([milleniumFalcon, doomFalcon, cometsBlessing, falconsGuile], [0.55, 0.25, 0.10]);
exports.generateEngineName = composite([manufacturerEngineName, manufacturerEngineNumber], [0.2, 0.8]);
exports.generateMiningLaserName = composite([miningLaserName, miningLaserNumber], [0.2, 0.8]);
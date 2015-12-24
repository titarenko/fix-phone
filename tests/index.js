var fix = require('../');
var should = require('should');
var _ = require('lodash');

var ua = {
	'050 127 12 12': '+380501271212',
	'121 123 12 12': null,
	'010-121-22-33': null
};

var ru = {
	'+7(960)811-44-01': '+79608114401',
 	'+7 917 216 0487': '+79172160487',
 	'89049685792': '+79049685792',
 	'79511841936': '+79511841936',
 	'79002610152': '+79002610152',
 	'89529435978': '+79529435978',
 	'7±79788599650': null,
 	'79215423650': '+79215423650',
 	'84959689486680': null,
 	'74953833859': null
};

var kz = {
	'777 127 12 12': '+77771271212',
	'123 022 22 22': null,
	'87771375088': '+77771375088'
};

describe('fix-phone', function () {
	it('should fix ua phones', function () {
		_.each(ua, function (expected, phone) {
			should(fix('ua', phone)).eql(expected);
		});
	});
	it('should fix ru phones', function () {
		_.each(ru, function (expected, phone) {
			should(fix('ru', phone)).eql(expected);
		});
	});
	it('should fix kz phones', function () {
		_.each(kz, function (expected, phone) {
			should(fix('kz', phone)).eql(expected);
		});
	});
});

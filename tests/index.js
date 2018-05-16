var fix = require('../src');
var should = require('should');
var _ = require('lodash');
var util = require('util');

var countries = [
	'ua', 'ru', 'kz', 'ro', 'th',
	'bg', 'si', 'cz', 'pl', 'hr',
	'ee', 'lt', 'lv', 'kg', 'gr',
	'cy', 'es', 'pt', 'it', 'de',
	'hu', 'fr', 'vn', 'sk', 'sg',
	'za', 'rw', 'cd', 'my', 'ke',
	'cg'
]

describe('fix-phone', function () {
	countries.forEach(function (code) {
		var country = require('./countries/' + code);
		it('should fix ' + code + ' phones', function () {
			_.each(country.fix, function (expected, phone) {
				var actual = fix(code, phone)
				should(actual).eql(expected, util.format('%s -> %s, but see %s', phone, expected, actual));
			});
		});
		it('should decompose ' + code + ' phones', function () {
			_.each(country.decompose, function (expected, phone) {
				var actual = fix.decompose(code, phone)
				should(actual).eql(expected, util.format('%s -> %j, but see %j', phone, expected, actual));
			});
		});
	});
});

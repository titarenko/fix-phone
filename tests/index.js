var fix = require('../');
var should = require('should');
var _ = require('lodash');

var codes = [
	'ua', 'ru', 'kz', 'ro', 'th',
	'bg', 'si', 'cz', 'pl', 'hr',
	'ee', 'lt', 'lv', 'kg', 'gr',
	'cy', 'es', 'pt', 'it', 'de',
	'hu', 'fr', 'vn'
]

describe('fix-phone', function () {
	codes.forEach(function (code) {
		it('should fix ' + code + ' phones', function () {
			_.each(require('./' + code), function (expected, phone) {
				should(fix(code, phone)).eql(expected);
			});
		});
	});
});

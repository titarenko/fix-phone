var fix = require('../');
var should = require('should');

describe('fix-phone', function () {
	it('should fix 89049685792', function () {
		fix('ru', '89049685792').should.eql('+79049685792');
	});
});

var fix = require('../src');
var test = require('tape');
var util = require('util');
var fs = require('fs');

var countries = fs.readdirSync(__dirname + '/countries').map(function (c) {
	return c.slice(0, -3)
})

countries.forEach(function (code) {
	var cases = require('./countries/' + code)

	Object.keys(cases.fix).forEach(function (sut) {
		test('should fix ' + code + ' ' + sut, function (t) {
			t.plan(1)
			t.equal(fix(code, sut), cases.fix[sut])
		})
	})

	Object.keys(cases.decompose).forEach(function (sut) {
		test('should decompose ' + code + ' ' + sut, function (t) {
			t.plan(1)
			t.deepEqual(fix.decompose(code, sut), cases.decompose[sut])
		})
	})
})

test('should not crash on sanitize', function (t) {
	t.plan(1)
	t.doesNotThrow(function () {
		fix.sanitize(null)
	})
})

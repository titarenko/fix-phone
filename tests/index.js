var fix = require('../src');
var tape = require('tape');
var util = require('util');
var fs = require('fs');

var countries = fs.readdirSync(__dirname + '/countries')

for (i in countries) {
	var c = countries[i];
	var cases = require('./countries/' + c);

	test('should fix ' + c, function (t) {
		var sut = Object.keys(cases.fix)
		t.plan(sut.length)
		for (var j in expected) {
			t.equal(fix(c, sut[j]), cases[sut[j]])
		}
	})

	test('should decompose ' + c, function (t) {
		var sut = Object.keys(cases.decompose)
		t.plan(sut.length)
		for (var j in expected) {
			t.equal(fix.decompose(c, sut[j]), cases[sut[j]])
		}
	})
}

t('should not crash on sanitize', function (t) {
	t.plan(1)
	t.doesNotThrow(function () {
		fix.sanitize(null)
	})
})

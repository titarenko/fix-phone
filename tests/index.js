var fix = require('../');
var should = require('should');
var _ = require('lodash');

var ua = require('./ua');
var kz = require('./kz');
var ru = require('./ru');

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

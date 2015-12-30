var fix = require('../');
var should = require('should');
var _ = require('lodash');

var ua = require('./ua');
var uaNoValidation = require('./ua-no-validation');

var kz = require('./kz');
var kzNoValidation = require('./kz-no-validation');

var ru = require('./ru');
var ruNoValidation = require('./ru-no-validation');

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
	it('should fix ua phones w/o validation', function () {
		_.each(uaNoValidation, function (expected, phone) {
			should(fix('ua', phone, true)).eql(expected);
		});
	});
	it('should fix ru phones w/o validation', function () {
		_.each(ruNoValidation, function (expected, phone) {
			should(fix('ru', phone, true)).eql(expected);
		});
	});
	it('should fix kz phones w/o validation', function () {
		_.each(kzNoValidation, function (expected, phone) {
			should(fix('kz', phone, true)).eql(expected);
		});
	});	
});

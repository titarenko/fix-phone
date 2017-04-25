var decompose = require('../').decompose;
var should = require('should');
var _ = require('lodash');

describe('fix-phone', function () {
	describe('decompose', function () {
		it('should decompose ua phones', function () {
			decompose('ua', '+380507776655').should.eql({
				country: '+380',
				local: '050',
				phone: '7776655'
			});
		});
		it('should decompose ru phones', function () {
			decompose('ru', '+77219998877').should.eql({
				country: '+7',
				local: '721',
				phone: '9998877'
			});
		});
		it('should decompose kz phones', function () {
			decompose('kz', '+77779998877').should.eql({
				country: '+7',
				local: '777',
				phone: '9998877'
			});
		});
		it('should decompose ro phones', function () {
			decompose('ro', '+40734556677').should.eql({
				country: '+40',
				local: '734',
				phone: '556677'
			});
		});
		it('should decompose th mobile phones', function () {
			decompose('th', '+66966362847').should.eql({
				country: '+66',
				local: '966',
				phone: '362847'
			});
		});
		it('should decompose th mobile phones', function () {
			decompose('th', '+66 (633) 299999').should.eql({
				country: '+66',
				local: '633',
				phone: '299999'
			});
		});
		it('should decompose th city phones', function () {
			decompose('th', '+6620123456').should.eql({
				country: '+66',
				local: '20',
				phone: '123456'
			});
		});
		it('should decompose th short phones', function () {
			decompose('th', '0621197449').should.eql({
				country: '+66',
				local: '621',
				phone: '197449'
			});
		});
		it('should decompose lv phones', function () {
			decompose('lv', '+37120012345').should.eql({
				country: '+371',
				local: '200',
				phone: '12345'
			});
		});
		
		it('should decompose lt phones', function () {
			decompose('lt', '+37060123456').should.eql({
				country: '+370',
				local: '60',
				phone: '123456'
			});
		});
		
		it('should decompose lt phones', function () {
			decompose('lt', '852123456').should.eql({
				country: '+370',
				local: '52',
				phone: '123456'
			});
		});
		
		it('should decompose ee phones', function () {
			decompose('ee', '+3725012345').should.eql({
				country: '+372',
				local: '5',
				phone: '012345'
			});
		});
		
		it('should decompose ee mobile phones', function () {
			decompose('ee', '+37251123456').should.eql({
				country: '+372',
				local: '51',
				phone: '123456'
			});
		});
		
		it('should decompose hr phones', function () {
			decompose('hr', '+38597123456').should.eql({
				country: '+385',
				local: '9',
				phone: '7123456'
			});
		});
		
		it('should decompose hr short phones', function () {
			decompose('hr', '010123456').should.eql({
				country: '+385',
				local: '1',
				phone: '0123456'
			});
		});
		
		it('should decompose hr mobile phones', function () {
			decompose('hr', '+385911234567').should.eql({
				country: '+385',
				local: '91',
				phone: '1234567'
			});
		});
		
		it('should decompose cz phones', function () {
			decompose('cz', '+420201234567').should.eql({
				country: '+420',
				local: '20',
				phone: '1234567'
			});
		});
		
		it('should decompose si phones', function () {
			decompose('si', '+38611234567').should.eql({
				country: '+386',
				local: '1',
				phone: '1234567'
			});
		});
		
		it('should decompose si short phones', function () {
			decompose('si', '011234567').should.eql({
				country: '+386',
				local: '1',
				phone: '1234567'
			});
		});
		
		it('should decompose pl phones', function () {
			decompose('pl', '+48221234567').should.eql({
				country: '+48',
				local: '22',
				phone: '1234567'
			});
		});
		
		it('should decompose pl short phones', function () {
			decompose('pl', '0221234567').should.eql({
				country: '+48',
				local: '22',
				phone: '1234567'
			});
		});
		
		it('should decompose bg phones', function () {
			decompose('bg', '+35921234567').should.eql({
				country: '+359',
				local: '2',
				phone: '1234567'
			});
		});
	});
});
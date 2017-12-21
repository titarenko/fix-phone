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
				local: '221',
				phone: '234567'
			});
		});
		
		it('should decompose pl short phones', function () {
			decompose('pl', '0221234567').should.eql({
				country: '+48',
				local: '221',
				phone: '234567'
			});
		});
		
		it('should decompose bg phones', function () {
			decompose('bg', '+35921123456').should.eql({
				country: '+359',
				local: '2',
				phone: '1123456'
			});
		});

		it('should decompose bg short phones', function () {
			decompose('bg', '010123456').should.eql({
				country: '+359',
				local: '1',
				phone: '0123456'
			});
		});

		it('should decompose bg mobile phones', function () {
			decompose('bg', '+359212345678').should.eql({
				country: '+359',
				local: '21',
				phone: '2345678'
			});
		});

		it('should decompose bg mobile phones', function () {
			decompose('bg', '+359212345678').should.eql({
				country: '+359',
				local: '21',
				phone: '2345678'
			});
		});

		it('should decompose kg phones', function () {
			decompose('kg', '+996312234567').should.eql({
				country: '+996',
				local: '31',
				phone: '2234567'
			});
		});

		it('should decompose kg short phones', function () {
			decompose('kg', '0312234567').should.eql({
				country: '+996',
				local: '31',
				phone: '2234567'
			});
		});

		it('should decompose gr phones', function () {
			decompose('gr', '+302121234567').should.eql({
				country: '+30',
				local: '212',
				phone: '1234567'
			});
		});

		it('should decompose cy phones', function () {
			decompose('cy', '+35722123456').should.eql({
				country: '+357',
				local: '22',
				phone: '123456'
			});
		});

		it('should decompose es phones', function () {
			decompose('es', '+34600123456').should.eql({
				country: '+34',
				local: '600',
				phone: '123456'
			});
		});

		it('should decompose pt phones', function () {
			decompose('pt', '+351210123456').should.eql({
				country: '+351',
				local: '210',
				phone: '123456'
			});
		});

		it('should decompose it phones', function () {
			decompose('it', '+390201234567').should.eql({
				country: '+39',
				local: '020',
				phone: '1234567'
			});
		});
		it('should decompose de short phones', function () {
			decompose('de', '+492011234567').should.eql({
				country: '+49',
				local: '20',
				phone: '11234567'
			});
		});

		it('should decompose de phones', function () {
			decompose('de', '+4915212345678').should.eql({
				country: '+49',
				local: '152',
				phone: '12345678'
			});
		});

		it('should decompose hu short phones', function () {
			decompose('hu', '+3610123456').should.eql({
				country: '+36',
				local: '1',
				phone: '0123456'
			});
		});

		it('should decompose hu phones', function () {
			decompose('hu', '+36201234567').should.eql({
				country: '+36',
				local: '20',
				phone: '1234567'
			});
		});

		it('should decompose fr phones', function () {
			decompose('fr', '+33101123456').should.eql({
				country: '+33',
				local: '101',
				phone: '123456'
			});
		});

		it('should decompose vn phones', function () {
			decompose('vn', '+84121234567').should.eql({
				country: '+84',
				local: '12',
				phone: '1234567'
			});
		});
		
		it('should decompose sk mobile phones', function () {
			decompose('sk', '+421915555555').should.eql({
				country: '+421',
				local: '915',
				phone: '555555'
			});
		});
	});
});
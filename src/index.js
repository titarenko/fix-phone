var googleLibphonenumber = require('google-libphonenumber');
var phoneUtil = googleLibphonenumber.PhoneNumberUtil.getInstance();
var PNF = googleLibphonenumber.PhoneNumberFormat;

var tools = require('./tools');

module.exports = fixPhone;
module.exports.decompose = decomposePhone;
module.exports.sanitize = tools.getSanitizedPhone;

function fixPhone (cc, phone) {
	try {
		var number = phoneUtil.parse(phone, cc && cc.toUpperCase());
		return phoneUtil.format(number, PNF.E164);
	} catch (e_) {
		return null
	}
}

function decomposePhone (cc, phone) {
	// https://github.com/giggsey/libphonenumber-for-php/issues/66
	try {
		var number = phoneUtil.parse(phone, cc && cc.toUpperCase());
		var formatted = phoneUtil.format(number, PNF.INTERNATIONAL).split(' ');
		return {
			country: formatted[0],
			local: formatted[1],
			phone: formatted.slice(2).join('')
		};
	} catch (e_) {
		return null
	}
}

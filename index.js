var _ = require('lodash');

var countryCodes = {
	'ua': '+380',
	'ru': '+7',
	'kz': '+7',
	'ro': '+40'
};

var localCodeLengths = {
	'ua': 3,
	'ru': 3,
	'kz': 3,
	'ro': 3
};

var phoneLengths = {
	'ua': 7,
	'ru': 7,
	'kz': 7,
	'ro': 6
};

module.exports = fixPhone;
module.exports.decompose = decompose;

function decompose (cc, phone) {
	var fixed = fixPhone(cc, phone);
	if (!fixed) {
		return null;
	}
	return {
		country: countryCodes[cc],
		local: phone.slice(-phoneLengths[cc] - localCodeLengths[cc], -phoneLengths[cc]),
		phone: phone.slice(-phoneLengths[cc])
	};
}

function fixPhone (cc, phone) {
	switch (cc) {
		case 'ru': return fixRuPhone(phone);
		case 'ua': return fixUaPhone(phone);
		case 'kz': return fixKzPhone(phone);
		case 'ro': return fixRoPhone(phone);
		default: return null;
	}
}

var fixUaPhone = fixPhoneBuilder(9, 13, false, countryCodes['ua']);
var fixRuPhone = fixPhoneBuilder(10, 12, true, countryCodes['ru']);
var fixKzPhone = fixPhoneBuilder(10, 12, true, countryCodes['kz']);
var fixRoPhone = fixPhoneBuilder(9, 12, false, countryCodes['ro']);

function fixPhoneBuilder (minLength, maxLength, replace8, prefix) {
	return function (phone) {
		phone = phone.replace(/[^\d\+]/g, '');
		if (phone.length < minLength || phone.length > maxLength) {
			return null;
		}

		if (replace8 && phone.length > 10 && phone[0] == '8') {
			phone = prefix + phone.slice(1);
		}

		var offset = maxLength - phone.length;
		phone = prefix.slice(0, offset) + phone;

		if (phone.slice(0, prefix.length) != prefix) {
			return null;
		}

		return phone;
	};
}

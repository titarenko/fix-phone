var _ = require('lodash');

var countryCodes = {
	ua: '+380',
	ru: '+7',
	kz: '+7',
	ro: '+40',
	th: '+66'
};

var localCodeLengths = {
	ua: 3,
	ru: 3,
	kz: 3,
	ro: 3,
	th: 3
};

var countryLocalPrefix = {
	ua: '0',
	ru: '',
	kz: '',
	ro: '',
	th: ''
}

var phoneLengths = {
	ua: 7,
	ru: 7,
	kz: 7,
	ro: 6,
	th: 6
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
		local: countryLocalPrefix[cc] + phone.slice(countryCodes[cc].length, -phoneLengths[cc]),
		phone: phone.slice(-phoneLengths[cc])
	};
}

function fixPhone (cc, phone) {
	switch (cc) {
		case 'ru': return fixRuPhone(phone);
		case 'ua': return fixUaPhone(phone);
		case 'kz': return fixKzPhone(phone);
		case 'ro': return fixRoPhone(phone);
		case 'th': return fixThPhone(phone);
		default: return null;
	}
}

var fixUaPhone = fixPhoneBuilder(9, 13, false, countryCodes['ua']);
var fixRuPhone = fixPhoneBuilder(10, 12, true, countryCodes['ru']);
var fixKzPhone = fixPhoneBuilder(10, 12, true, countryCodes['kz']);
var fixRoPhone = fixPhoneBuilder(9, 12, false, countryCodes['ro']);

var fixThPhone = function (phone) {
	var trimmedPhone = _.trim(phone);
	var localPhone = trimmedPhone.length > 8
		? _.trimStart(trimmedPhone, _.uniq(countryCodes['th']))
		: trimmedPhone;

	if ([2, 3, 4, 5, 7].indexOf(Number(localPhone[0])) != -1) {
		return fixThCityPhone(phone)
	} else {
		return fixThMobilePhone(phone)
	}
}

var fixThMobilePhone = fixPhoneBuilder(8, 12, false, countryCodes['th']);
var fixThCityPhone = fixPhoneBuilder(8, 11, false, countryCodes['th']);

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

var _ = require('lodash');

var countries = {
	ua: {
		countryCode: '+380',
		countryLocalPrefix: '0',
		localCodeLength: 3,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return false
		}
	},
	ru: {
		countryCode: '+7',
		countryLocalPrefix: '',
		localCodeLength: 3,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return phone.length > 10 && phone[0] == '8'
		}
	},
	kz: {
		countryCode: '+7',
		countryLocalPrefix: '',
		localCodeLength: 3,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return phone.length > 10 && phone[0] == '8'
		}
	},
	ro: {
		countryCode: '+40',
		countryLocalPrefix: '',
		localCodeLength: 3,
		phoneLength: 6,
		hasLocalPrefix: function (phone) {
			return false
		}
	},
	th: {
		countryCode: '+66',
		countryLocalPrefix: '',
		localCodeLength: 3,
		phoneLength: 6,
		hasLocalPrefix: function (phone) {
			return phone.length >= 9 && phone[0] == '0'
		}
	},
	bg: {
		countryCode: '+359',
		countryLocalPrefix: '',
		localCodeLength: 2,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return phone.length >= 8 && phone[0] == '0'
		}
	},
	si: {
		countryCode: '+386',
		countryLocalPrefix: '',
		localCodeLength: 1,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return phone.length >= 9 && phone[0] == '0'
		}
	},
	cz: {
		countryCode: '+420',
		countryLocalPrefix: '',
		localCodeLength: 2,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return false
		}
	},
	pl: {
		countryCode: '+48',
		countryLocalPrefix: '',
		localCodeLength: 3,
		phoneLength: 6,
		hasLocalPrefix: function (phone) {
			return phone.length >= 9 && phone[0] == '0'
		}
	},
	hr: {
		countryCode: '+385',
		countryLocalPrefix: '',
		localCodeLength: 1,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return phone.length >= 9 && phone[0] == '0'
		}
	},
	ee: {
		countryCode: '+372',
		countryLocalPrefix: '',
		localCodeLength: 1,
		phoneLength: 6,
		hasLocalPrefix: function (phone) {
			return false
		}
	},
	lt: {
		countryCode: '+370',
		countryLocalPrefix: '',
		localCodeLength: 2,
		phoneLength: 6,
		hasLocalPrefix: function (phone) {
			return phone.length >= 9 && phone[0] == '8'
		}
	},
	lv: {
		countryCode: '+371',
		countryLocalPrefix: '',
		localCodeLength: 3,
		phoneLength: 5,
		hasLocalPrefix: function (phone) {
			return false
		}
	},
	kg: {
		countryCode: '+996',
		countryLocalPrefix: '',
		localCodeLength: 1,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return phone.length >= 10 && phone[0] == '0'
		}
	},
	gr: {
		countryCode: '+30',
		countryLocalPrefix: '',
		localCodeLength: 3,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return false
		}
	},
	cy: {
		countryCode: '+357',
		countryLocalPrefix: '',
		localCodeLength: 2,
		phoneLength: 6,
		hasLocalPrefix: function (phone) {
			return false
		}
	},
	es: {
		countryCode: '+34',
		countryLocalPrefix: '',
		localCodeLength: 3,
		phoneLength: 6,
		hasLocalPrefix: function (phone) {
			return false
		}
	},
	pt: {
		countryCode: '+351',
		countryLocalPrefix: '',
		localCodeLength: 3,
		phoneLength: 6,
		hasLocalPrefix: function (phone) {
			return false
		}
	},
	it: {
		countryCode: '+39',
		countryLocalPrefix: '',
		localCodeLength: 3,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return false
		}
	},
	hu: {
		countryCode: '+36',
		countryLocalPrefix: '',
		localCodeLength: 2,
		phoneLength: 6,
		hasLocalPrefix: function (phone) {
			return false
		}
	},
	de: {
		countryCode: '+49',
		countryLocalPrefix: '',
		localCodeLength: 3,
		phoneLength: 8,
		hasLocalPrefix: function (phone) {
			return false
		}
	}
}

module.exports = fixPhone;
module.exports.decompose = decompose;

function decompose (cc, phone) {
	var fixed = fixPhone(cc, phone);
	if (!fixed) {
		return null;
	}
	var config = countries[cc]
	return {
		country: config.countryCode,
		local: config.countryLocalPrefix + fixed.slice(config.countryCode.length, -config.phoneLength),
		phone: fixed.slice(-config.phoneLength)
	};
}

function fixPhone (cc, phone) {
	switch (cc) {
		case 'ru': return fixRuPhone(phone);
		case 'ua': return fixUaPhone(phone);
		case 'kz': return fixKzPhone(phone);
		case 'ro': return fixRoPhone(phone);
		case 'th': return fixThPhone(phone);
		case 'lv': return fixLvPhone(phone);
		case 'lt': return fixLtPhone(phone);
		case 'pl': return fixPlPhone(phone);
		case 'ee': return fixEePhone(phone);
		case 'hr': return fixHrPhone(phone);
		case 'cz': return fixCzPhone(phone);
		case 'si': return fixSiPhone(phone);
		case 'bg': return fixBgPhone(phone);
		case 'kg': return fixKgPhone(phone);
		case 'gr': return fixGrPhone(phone);
		case 'cy': return fixCyPhone(phone);
		case 'es': return fixEsPhone(phone);
		case 'pt': return fixPtPhone(phone);
		case 'it': return fixItPhone(phone);
		case 'hu': return fixHuPhone(phone);
		case 'de': return fixDePhone(phone);
		default: return null;
	}
}

function getLocalCode (cc, phone) {
	phone = phone.replace(/[^\d\+]/g, '');
	var phoneWithoutPlus = phone[0] == '+' ? phone.slice(1) : phone
	var config = countries[cc]
	var countryCodeWithoutPlus = config.countryCode.slice(1);

	var hasCountryCode = phoneWithoutPlus.slice(0, countryCodeWithoutPlus.length) == countryCodeWithoutPlus
	var phoneWithoutCountryCode = hasCountryCode ? phoneWithoutPlus.slice(countryCodeWithoutPlus.length) : phoneWithoutPlus

	var phoneWithoutLocalPrefix = config.hasLocalPrefix(phoneWithoutCountryCode) ? phoneWithoutCountryCode.slice(1) : phoneWithoutCountryCode

	return phoneWithoutLocalPrefix.slice(0, -config.phoneLength)
}

var fixUaPhone = fixPhoneBuilder(9, 13, 'ua');
var fixRuPhone = fixPhoneBuilder(10, 12, 'ru');
var fixKzPhone = fixPhoneBuilder(10, 12, 'kz');
var fixRoPhone = fixPhoneBuilder(9, 12, 'ro');
var fixLvPhone = fixPhoneBuilder(8, 12, 'lv');
var fixLtPhone = fixPhoneBuilder(8, 12, 'lt');
var fixPlPhone = fixPhoneBuilder(9, 12, 'pl');
var fixCzPhone = fixPhoneBuilder(9, 13, 'cz');
var fixSiPhone = fixPhoneBuilder(8, 12, 'si');
var fixKgPhone = fixPhoneBuilder(9, 13, 'kg');
var fixGrPhone = fixPhoneBuilder(10, 13, 'gr');
var fixCyPhone = fixPhoneBuilder(8, 12, 'cy');
var fixEsPhone = fixPhoneBuilder(9, 12, 'es');
var fixPtPhone = fixPhoneBuilder(9, 13, 'pt');
var fixItPhone = fixPhoneBuilder(10, 13, 'it');
var fixHuPhone = function (phone) {
	var localCode = getLocalCode('hu', phone)
	return localCode.length > 2 ? fixHuPhoneWithThreeNumber(phone) : fixHuPhoneWithTwoNumber(phone)
}
var fixDePhone = function (phone) {
	var localCode = getLocalCode('de', phone)
	return localCode.length > 2 ? fixDePhoneWithThreeNumber(phone) : fixDePhoneWithTwoNumber(phone)
}
var fixBgPhone = function (phone) {
	var localCode = getLocalCode('bg', phone)
	return localCode.length > 1 ? fixBgPhoneMobile(phone) : fixBgCityPhone(phone)
}
var fixEePhone = function (phone) {
	var localCode = getLocalCode('ee', phone)
	return localCode.length > 1 ? fixEePhoneWithTwoNumberInLocalCode(phone) : fixEePhoneWithOneNumberInLocalCode(phone)
}
var fixHrPhone = function (phone) {
	var localCode = getLocalCode('hr', phone)
	return localCode.length > 1 ? fixHrPhoneWithTwoNumberInLocalCode(phone) : fixHrPhoneWithOneNumberInLocalCode(phone)
}
var fixThPhone = function (phone) {
	var localCode = getLocalCode('th', phone)
	if ([2, 3, 4, 5, 7].indexOf(Number(localCode[0])) != -1) {
		return fixThCityPhone(phone)
	} else {
		return fixThMobilePhone(phone)
	}
}

var fixThMobilePhone = fixPhoneBuilder(8, 12, 'th');
var fixThCityPhone = fixPhoneBuilder(8, 11, 'th');
var fixEePhoneWithOneNumberInLocalCode = fixPhoneBuilder(7, 11, 'ee');
var fixEePhoneWithTwoNumberInLocalCode = fixPhoneBuilder(8, 12, 'ee');
var fixHrPhoneWithOneNumberInLocalCode = fixPhoneBuilder(8, 12, 'hr');
var fixHrPhoneWithTwoNumberInLocalCode = fixPhoneBuilder(9, 13, 'hr');
var fixBgCityPhone = fixPhoneBuilder(8, 12, 'bg');
var fixBgPhoneMobile = fixPhoneBuilder(9, 13, 'bg');
var fixDePhoneWithTwoNumber = fixPhoneBuilder(9, 13, 'de');
var fixDePhoneWithThreeNumber = fixPhoneBuilder(10, 14, 'de');
var fixHuPhoneWithTwoNumber = fixPhoneBuilder(8, 11, 'hu');
var fixHuPhoneWithThreeNumber = fixPhoneBuilder(9, 12, 'hu');

function fixPhoneBuilder (minLength, maxLength, cc) {
	return function (phone) {
		phone = phone.replace(/[^\d\+]/g, '');
		if (phone.length < minLength || phone.length > maxLength) {
			return null;
		}
		var config = countries[cc]
		var prefix = config.countryCode
		if (config.hasLocalPrefix(phone)) {
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
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
		localCodeLength: 1,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return false
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
		localCodeLength: 2,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return phone.length >= 10 && phone[0] == '0'
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
		default: return null;
	}
}

var getThLocalPhone = function(phone) {
	var trimmedPhone = _.trim(phone);
	var config = countries['th']
	var phoneWithoutLocalPrefix = trimmedPhone[0] == '0'
		? trimmedPhone.slice(1, -1)
		: trimmedPhone
	
	return phoneWithoutLocalPrefix.length > 8
		? _.trimStart(phoneWithoutLocalPrefix, _.uniq(config.countryCode))
		: phoneWithoutLocalPrefix;
}
var getEeLocalCode = function (phone) {
	phone = phone.replace(/[^\d\+]/g, '');
	var phoneWithoutPlus = phone[0] == '+' ? phone.slice(1) : phone
	var config = countries['ee']
	var countryCodeWithoutPlus = config.countryCode.slice(1);
	var hasCountryCode = phoneWithoutPlus.slice(0, countryCodeWithoutPlus.length) == countryCodeWithoutPlus
	var phoneWithoutCountryCode = hasCountryCode ? phoneWithoutPlus.slice(countryCodeWithoutPlus.length) : phoneWithoutPlus
	
	return phoneWithoutCountryCode.slice(0, -config.phoneLength)
}
var getHrLocalCode = function (phone) {
	phone = phone.replace(/[^\d\+]/g, '');
	var phoneWithoutPlus = phone[0] == '+' ? phone.slice(1) : phone
	var config = countries['hr']
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
var fixBgPhone = fixPhoneBuilder(8, 12, 'bg');
var fixEePhone = function (phone) {
	var localCode = getEeLocalCode(phone)
	return localCode.length > 1 ? fixEePhoneWithTwoNumberInLocalCode(phone) : fixEePhoneWithOneNumberInLocalCode(phone)
}
var fixHrPhone = function (phone) {
	var localCode = getHrLocalCode(phone)
	return localCode.length > 1 ? fixHrPhoneWithTwoNumberInLocalCode(phone) : fixHrPhoneWithOneNumberInLocalCode(phone)
}
var fixThPhone = function (phone) {
	var localPhone = getThLocalPhone(phone)
	if ([2, 3, 4, 5, 7].indexOf(Number(localPhone[0])) != -1) {
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
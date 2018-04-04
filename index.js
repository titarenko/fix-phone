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
		localCodeLength: 3,
		phoneLength: function (phone) {
			return _.size(phone) - 3 - 4
		},
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
		phoneLength: 6,
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
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return phone.length > 10 && phone[0] == '0'
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
	},
	vn: {
		countryCode: '+84',
		countryLocalPrefix: '',
		localCodeLength: 2,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return false
		}
	},
	fr: {
		countryCode: '+33',
		countryLocalPrefix: '',
		localCodeLength: 3,
		phoneLength: 6,
		hasLocalPrefix: function (phone) {
			return phone.length >= 10 && phone[0] == '0'
		}
	},
	sk: {
		countryCode: '+421',
		countryLocalPrefix: '',
		localCodeLength: 2,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return phone.length >= 10 && phone[0] == '0'
		}
	},
	sg: {
		countryCode: '+65',
		countryLocalPrefix: '',
		localCodeLength: 2,
		phoneLength: 6,
		hasLocalPrefix: function (phone) {
			return phone.length >= 10 && phone[0] == '0'
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
	var phoneLength = _.isFunction(config.phoneLength) ? config.phoneLength(fixed) : config.phoneLength
	return {
		country: config.countryCode,
		local: config.countryLocalPrefix + fixed.slice(config.countryCode.length, -phoneLength),
		phone: fixed.slice(-phoneLength)
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
		case 'fr': return fixFrPhone(phone);
		case 'vn': return fixVnPhone(phone);
		case 'sk': return fixSkPhone(phone);
		case 'sg': return fixSgPhone(phone);
		case 'my': return fixMyPhone(phone);
		default: return null;
	}
}

function getLocalCode (cc, phone) {
	phone = phone.replace(/[^\d\+]/g, '');
	var phoneWithoutPlus = phone[0] == '+' ? phone.slice(1) : phone
	var config = countries[cc]
	var countryCodeWithoutPlus = config.countryCode.slice(1);

	var hasCountryCode = phoneWithoutPlus.slice(0, countryCodeWithoutPlus.length) == countryCodeWithoutPlus
	var phoneWithoutCountryCode = hasCountryCode
		? phoneWithoutPlus.slice(countryCodeWithoutPlus.length)
		: phoneWithoutPlus

	var phoneWithoutLocalPrefix = config.hasLocalPrefix(phoneWithoutCountryCode)
		? phoneWithoutCountryCode.slice(1)
		: phoneWithoutCountryCode

	return phoneWithoutLocalPrefix.slice(0, -config.phoneLength)
}

var fixUaPhone = fixPhoneBuilder(9, 13, 'ua');
var fixRuPhone = function (phone) {
	phone = phone[0] === '+' && phone[1] === '8' ? phone.slice(1) : phone
	return fixRuPhoneWithCorrectNumber(phone)
}
var fixFrPhoneBuilder = fixPhoneBuilder(9, 12, 'fr');
var fixKzPhone = fixPhoneBuilder(10, 12, 'kz');
var fixRoPhoneBuilder = fixPhoneBuilder(9, 12, 'ro');
var fixLvPhoneBuilder = fixPhoneBuilder(8, 13, 'lv');
var fixLtPhoneBuilder = fixPhoneBuilder(8, 12, 'lt');
var fixPlPhoneBuilder = fixPhoneBuilder(9, 12, 'pl');
var fixCzPhoneBuilder = fixPhoneBuilder(9, 13, 'cz');
var fixSiPhoneBuilder = fixPhoneBuilder(8, 12, 'si');
var fixKgPhone = fixPhoneBuilder(9, 13, 'kg');
var fixGrPhoneBuilder = fixPhoneBuilder(10, 13, 'gr');
var fixCyPhoneBuilder = fixPhoneBuilder(8, 12, 'cy');
var fixEsPhoneBuilder = fixPhoneBuilder(9, 12, 'es');
var fixPtPhoneBuilder = fixPhoneBuilder(9, 13, 'pt');
var fixItPhoneBuilder = fixPhoneBuilder(10, 13, 'it');
var fixSgPhone = fixPhoneBuilder(8, 11, 'sg');

function fixCzPhone (phone) {
	var reversed = reverseString(phone)
	if(/^.{8}[0]/.test(reversed)) {
		return null
	}
	return fixCzPhoneBuilder(phone)
}

function fixMyPhone (phone) {
	return phone
}

function fixSiPhone (phone) {
	var reversed = reverseString(phone)
	if(/^.{7}[0]/.test(reversed)) {
		return null
	}
	return fixSiPhoneBuilder(phone)
}
function fixSkPhone (phone) {
	var reversed = reverseString(phone)
	if(/^.{8}[0]/.test(reversed)) {
		return null
	}
	return fixSkPhoneBuilder(phone)
}

var fixPlPhone = function (phone) {
	var reversed = reverseString(phone)
	if(/^.{8}[0]/.test(reversed)) {
		return null
	}
	return fixPlPhoneBuilder(phone)
}
var fixLvPhone = function (phone) {
	var reversed = reverseString(phone)
	if(/^.{8}[0]/.test(reversed)) {
		return null
	}
	return fixLvPhoneBuilder(phone)
}

var fixCyPhone = function (phone) {
	var reversed = reverseString(phone)
	if(/^.{7}[0]/.test(reversed)) {
		return null
	}
	return fixCyPhoneBuilder(phone)
}

var fixLtPhone = function (phone) {
	var reverced = reverseString(phone)
	if(/^.{7}[08]/.test(reverced)) {
		return null
	}
	return fixLtPhoneBuilder(phone)
}

var fixGrPhone = function (phone) {
	if(phone.length === 10 && /^0/.test(phone) || phone.length === 12 && /^.{2}[0]/.test(phone)) {
		return null
	}
	return fixGrPhoneBuilder(phone)
}
var fixItPhone = function (phone) {

	if (/^0/.test(phone) && phone.length < 11) {
		return null
	}
	return fixItPhoneBuilder(phone)
}
var fixRoPhone = function (phone) {
	phone = getSanitizedPhone(phone)
	if (/^(00)|(400)/.test(phone) && phone.length < 12) {
		return null
	}
	if (!/^(400)|(0)|(\+400)/.test(phone) && phone.length < 10) {
		return null
	}
	if (/^\+400/.test(phone) && phone.length > 12) {
		phone = phone.replace(/^(\+400)/, '+40')
	}
	if (/^400/.test(phone) && phone.length > 11) {
		phone = phone.replace(/^(400)/, '40')
	}
	return fixRoPhoneBuilder(phone);
}
var fixPtPhone = function (phone) {
	if (/^3510/.test(phone) && phone.length < 13 || (/^0/.test(phone) && phone.length < 10)) {
		return null
	}
	return fixPtPhoneBuilder(phone)
}
var fixFrPhone = function (phone) {
	phone = getSanitizedPhone(phone)
	if (/^00/.test(phone)) {
		return null
	}
	var pattern = /^(330)|(0)|(\+331)/
	if (!pattern.test(phone) && phone.length < 10) {
		return null
	}
	if (!(/^\+330/.test(phone) && phone.length < 13)) {
		phone = phone.replace(/^(\+330)|(330)|(\+0)/, '+33')
	}
	return fixFrPhoneBuilder(phone)
}
var fixEsPhone = function (phone) {
	if (/^0/.test(phone) && phone.length < 10 || /^340/.test(phone) && phone.length < 12) {
		return null
	}
	return fixEsPhoneBuilder(phone)
}
var fixHuPhone = function (phone) {
	phone = getSanitizedPhone(phone)
	if(phone.length === 9) {
		var shortPattern = /^.{2}[0]/
		if(shortPattern.test(phone)) {
			return null
		}
	}
	if(/^36/.test(phone) && phone.length === 11) {
		var longPattern = /^.{2}[0]/
		if(longPattern.test(phone)) {
			return null
		}
	}
	phone = phone.replace(/^00/g, '')
	if (phone.length > 9 && (phone[0] == '0' && phone[1] == '6')) {
		phone = phone.slice(2)
	}
	var localCode = getLocalCode('hu', phone)
	return localCode.length > 1
		? fixHuLongPhone(phone)
		: fixHuShortPhone(phone)
}
var fixDePhone = function (phone) {
	phone = getSanitizedPhone(phone)
	if (/^00/.test(phone)) {
		return null
	}
	if (phone.length < 10 && /^06/.test(phone)) {
		phone = phone.replace(/^(0)/, '+49')
	} else {
		phone = phone.replace(/^(06)/, '+496')
		phone = phone.replace(/^(02)/, '+492')
	}
	var localCode = getLocalCode('de', phone)
	if (localCode.length < 2 && phone.length === 12) {
		return fixDe12digit(phone)
	}
	if (localCode.length < 2 && phone.length === 11) {
		return fixDe11digit(phone)
	}
	return localCode.length > 2
		? fixDeLongPhone(phone)
		: fixDeShortPhone(phone)
}
var fixBgPhone = function (phone) {
	if(/^0/.test(phone) && phone.length < 10) {
		return null
	}
	if(/^0/.test(phone) && phone.length < 11) {
		phone = phone.replace(/^(0)/, '359')
	}
	var localCode = getLocalCode('bg', phone)
	return localCode.length > 1
		? fixBgPhoneMobile(phone)
		: fixBgCityPhone(phone)
}
var fixEePhone = function (phone) {
	var localCode = getLocalCode('ee', phone)
	var reversed = reverseString(phone)
	if(/^.{7}[0]/.test(reversed)) {
		return null
	}
	return localCode.length > 1
		? fixEePhoneWithTwoNumberInLocalCode(phone)
		: fixEePhoneWithOneNumberInLocalCode(phone)
}
var fixHrPhone = function (phone) {
	var reversed = reverseString(phone)
	if(/^.{8}[0]/.test(reversed)) {
		return null
	}
	return fixHrPhoneWithSixNumberInPhoneNumber(phone)
		|| fixHrPhoneWithFiveNumberInPhoneNumber(phone)
}
var fixThPhone = function (phone) {
	var localCode = getLocalCode('th', phone)
	if ([2, 3, 4, 5, 7].indexOf(Number(localCode[0])) != -1) {
		return fixThCityPhone(phone)
	} else {
		return fixThMobilePhone(phone)
	}
}
var fixVnPhone = function (phone) {
	phone = phone.replace(/[^\d\+]/g, '').replace(/^00/g, '')
	var localCode = getLocalCode('vn', phone)
	return localCode.length > 1
		? fixVnLongPhone(phone)
		: fixVnShortPhone(phone)
}
var fixRuPhoneWithCorrectNumber = fixPhoneBuilder(10, 12, 'ru');
var fixSkPhoneBuilder = fixPhoneBuilder(9, 13, 'sk');
var fixThMobilePhone = fixPhoneBuilder(8, 12, 'th');
var fixThCityPhone = fixPhoneBuilder(8, 11, 'th');
var fixEePhoneWithOneNumberInLocalCode = fixPhoneBuilder(7, 11, 'ee');
var fixEePhoneWithTwoNumberInLocalCode = fixPhoneBuilder(8, 12, 'ee');
var fixHrPhoneWithFiveNumberInPhoneNumber = fixPhoneBuilder(8, 12, 'hr');
var fixHrPhoneWithSixNumberInPhoneNumber = fixPhoneBuilder(9, 13, 'hr');
var fixBgCityPhone = fixPhoneBuilder(8, 12, 'bg');
var fixBgPhoneMobile = fixPhoneBuilder(9, 13, 'bg');
var fixDeShortPhone = fixPhoneBuilder(9, 13, 'de');
var fixDe12digit = fixPhoneBuilder(9, 12, 'de');
var fixDe11digit = fixPhoneBuilder(9, 11, 'de');
var fixDeLongPhone = fixPhoneBuilder(10, 14, 'de');
var fixHuShortPhone = fixPhoneBuilder(8, 11, 'hu');
var fixHuLongPhone = fixPhoneBuilder(9, 12, 'hu');
var fixVnShortPhone = fixPhoneBuilder(8, 11, 'vn');
var fixVnLongPhone = fixPhoneBuilder(9, 12, 'vn');

function fixPhoneBuilder (minLength, maxLength, cc) {
	return function (phone) {
		phone = getSanitizedPhone(phone)
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

function getSanitizedPhone (phone) {
	var hasPlus = phone[0] === '+'
	var phoneWithoutPlus = hasPlus ? phone.slice(1) : phone
	var sanitizedPhone = phoneWithoutPlus.replace(/[^\d]/g, '')
	return hasPlus ? '+' + sanitizedPhone : sanitizedPhone
}
function reverseString(str) {
	return str.split("").reverse().join("");
}
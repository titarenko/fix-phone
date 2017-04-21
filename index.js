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
	cn: {
		countryCode: '+380',
		countryLocalPrefix: '0',
		localCodeLength: 3,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return false
		}
	},
	bg: {
		countryCode: '+380',
		countryLocalPrefix: '0',
		localCodeLength: 3,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return false
		}
	},
	si: {
		countryCode: '+380',
		countryLocalPrefix: '0',
		localCodeLength: 3,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return false
		}
	},
	cz: {
		countryCode: '+380',
		countryLocalPrefix: '0',
		localCodeLength: 3,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return false
		}
	},
	pl: {
		countryCode: '+380',
		countryLocalPrefix: '0',
		localCodeLength: 3,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return false
		}
	},
	hr: {
		countryCode: '+380',
		countryLocalPrefix: '0',
		localCodeLength: 3,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return false
		}
	},
	ee: {
		countryCode: '+380',
		countryLocalPrefix: '0',
		localCodeLength: 3,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return false
		}
	},
	lt: {
		countryCode: '+380',
		countryLocalPrefix: '0',
		localCodeLength: 3,
		phoneLength: 7,
		hasLocalPrefix: function (phone) {
			return false
		}
	},
	lv: {
		countryCode: '+380',
		countryLocalPrefix: '0',
		localCodeLength: 3,
		phoneLength: 7,
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

var fixUaPhone = fixPhoneBuilder(9, 13, 'ua');
var fixRuPhone = fixPhoneBuilder(10, 12, 'ru');
var fixKzPhone = fixPhoneBuilder(10, 12, 'kz');
var fixRoPhone = fixPhoneBuilder(9, 12, 'ro');
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
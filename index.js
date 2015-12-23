var _ = require('lodash');

module.exports = fixPhone;

function fixPhone (cc, phone) {
	switch (cc) {
		case 'ru': return fixRuPhone(phone);
		case 'ua': return fixUaPhone(phone);
		case 'kz': return fixKzPhone(phone);
		default: return null;
	}
}

var fixUaPhone = fixPhoneBuilder(8, 14, false, '+380', /\+38(\d{3})/, 
	[50, 63, 66, 67, 68, 73].concat(
		_.range(90, 99 + 1), 
		_.range(31, 38 + 1),
		41,
		_.range(43, 48 + 1),
		_.range(51, 57),
		_.range(61, 62 + 1),
		64, 65, 69
 	)
 );

var fixKzPhone = fixPhoneBuilder(9, 13, true, '+7', /\+7(\d{3})/, 
	[700, 701, 702, 705, 707, 708, 747, 771, 775, 776, 777, 778, 336].concat(
		_.range(710, 714 + 1),
		_.range(716, 718 + 1),
		_.range(721, 724 + 1),
		_.range(726, 729 + 1)
	)
);

var fixRuPhone = fixPhoneBuilder(9, 13, true, '+7', /\+7(\d{3})/,
	[].concat(
		_.range(900, 906 + 1),
		_.range(908, 934 + 1), 
		_.range(936, 939 + 1), 
		941, 
		_.range(950, 956 + 1), 
		958, 
		_.range(960, 971 + 1), 
		_.range(977, 978 + 1), 
		_.range(980, 989 + 1), 
		_.range(991, 997 + 1), 
		999
	)
);

function fixPhoneBuilder (minLength, maxLength, replace8, prefix, codeRegexp, validCodes) {
	return function (phone) {
		phone = phone.replace(/[^\d\+]/g, '');
	
		if (phone.length <= minLength || phone.length >= maxLength) {
			return null;
		}

		if (replace8 && phone[0] == '8') {
			phone = '+7' + phone.slice(1);
		}

		var offset = maxLength - 1 - phone.length;
		phone = prefix.slice(offset) + phone;

		var operatorCode = phone.match(codeRegexp);
		operatorCode = +(operatorCode && operatorCode[1]);
		if (isNaN(operatorCode)) {
			return null;
		}

		if (!_.contains(validCodes, operatorCode)) {
			return null;
		}

		return phone;
	};
}

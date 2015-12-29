var _ = require('lodash');

module.exports = fixPhone;

function fixPhone (cc, phone) {
	switch (cc.toLowerCase()) {
		case 'ru': return fixRuPhone(phone);
		case 'ua': return fixUaPhone(phone);
		case 'kz': return fixKzPhone(phone);
		default: return null;
	}
}

var fixUaPhone = fixPhoneBuilder(8, 14, false, '+380', /^\+38(\d{3})/, 
	[50, 63, 66, 67, 68, 73].concat(
		_.range(90, 99 + 1), 
		_.range(31, 38 + 1),
		41,
		_.range(43, 48 + 1),
		_.range(51, 57 + 1),
		_.range(61, 62 + 1),
		64, 65, 69
 	)
 );

var fixKzPhone = fixPhoneBuilder(9, 13, true, '+7', /^\+7(\d{3})/, 
	[700, 701, 702, 705, 707, 708, 747, 771, 775, 776, 777, 778, 336].concat(
		_.range(710, 718 + 1),
		_.range(716, 718 + 1),
		_.range(721, 729 + 1)
	)
);

var fixRuPhone = fixPhoneBuilder(9, 13, true, '+7', /^\+7(\d{3})/,
	[].concat(
		_.range(900, 906 + 1), _.range(908, 934 + 1), _.range(936, 941 + 1), _.range(950, 956 + 1), 958, _.range(960, 971 + 1), _.range(977, 978 + 1), _.range(980, 989 + 1), _.range(991, 997 + 1), 999,
		_.range(301, 302 + 1), 336, _.range(341, 343 + 1), _.range(345, 347 + 1), 349, _.range(351, 353 + 1), 365, _.range(381, 385 + 1), 388, _.range(390, 391 + 1), _.range(394, 395 + 1),
		401, 411, 413, _.range(415, 416 + 1), 421, _.range(423, 424 + 1), _.range(426, 427 + 1), _.range(471, 475 + 1), _.range(481, 487 + 1), _.range(491, 496 + 1), 499,
		_.range(811, 818 + 1), _.range(820, 821 + 1), 831, _.range(833, 836 + 1), _.range(840, 848 + 1), 851, 855, _.range(861, 863 + 1), _.range(865, 867 + 1), 869, _.range(871, 873 + 1), _.range(877, 879 + 1)
	)
);

function fixPhoneBuilder (minLength, maxLength, replace8, prefix, codeRegexp, validCodes) {
	return function (phone) {

		phone = phone.replace(/[^\d\+]/g, '');
		if (phone.length <= minLength || phone.length >= maxLength) {
			return null;
		}

		if (replace8 && phone.length > 10 && phone[0] == '8') {
			phone = '+7' + phone.slice(1);
		}

		var offset = maxLength - 1 - phone.length;
		phone = prefix.slice(0, offset) + phone;

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

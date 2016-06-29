var _ = require('lodash');

module.exports = fixPhone;

function fixPhone (cc, phone) {
	switch (cc) {
		case 'ru': return fixRuPhone(phone);
		case 'ua': return fixUaPhone(phone);
		case 'kz': return fixKzPhone(phone);
		case 'ro': return fixRoPhone(phone);
		default: return null;
	}
}

var fixUaPhone = fixPhoneBuilder(9, 13, false, '+380');
var fixRuPhone = fixPhoneBuilder(10, 12, true, '+7');
var fixKzPhone = fixPhoneBuilder(10, 12, true, '+7');
var fixRoPhone = fixPhoneBuilder(9, 12, false, '+40');

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

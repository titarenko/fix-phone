var countries = [
	'ua',
	'ru',
	'kz',
	'ro',
	'th',
	'bg',
	'si',
	'cz',
	'pl',
	'hr',
	'ee',
	'lt',
	'lv',
	'kg',
	'gr',
	'cy',
	'es',
	'pt',
	'it',
	'hu',
	'de',
	'vn',
	'fr',
	'sk',
	'sg',
	'za',
	'rw',
	'cg',
	'cd',
	'my',
	'ke',
	'mx'
].reduce(function (dict, code) {
	dict[code] = require('./countries/' + code)
	return dict
}, { })

module.exports = fixPhone;
module.exports.decompose = decomposePhone;

function fixPhone (cc, phone) {
	return cc in countries
		? countries[cc].fix(phone)
		: null
}

function decomposePhone (cc, phone) {
	return cc in countries
		? countries[cc].decompose(phone)
		: null
}

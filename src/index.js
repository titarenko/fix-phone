var tools = require('./tools');
var fs = require('fs');

var countries = fs.readdirSync(__dirname + '/countries').map(function (c) {
	return c.slice(0, -3)
}).reduce(function (dict, code) {
	dict[code] = require('./countries/' + code)
	return dict
}, { })

module.exports = fixPhone;
module.exports.decompose = decomposePhone;
module.exports.sanitize = tools.getSanitizedPhone;

function fixPhone (cc, phone) {
	try {
		return cc in countries
			? countries[cc].fix(phone)
			: null
	} catch (e_) {
		return null
	}
}

function decomposePhone (cc, phone) {
	try {
		return cc in countries
			? countries[cc].decompose(phone)
			: null
	} catch (e_) {
		return null
	}
}

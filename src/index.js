var tools = require('./tools');
var fs = require('fs');

var countries = fs.readdirSync(__dirname + '/countries').reduce(function (dict, code) {
	dict[code] = require('./countries/' + code)
	return dict
}, { })

module.exports = fixPhone;
module.exports.decompose = decomposePhone;
module.exports.sanitize = tools.getSanitizedPhone;

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

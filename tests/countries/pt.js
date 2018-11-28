module.exports = {
	fix: {
		// international format
		'+351999999999': '+351999999999',
		'+351199999999': '+351199999999',
		'+351099999999': '+351099999999',
		// zero instead of plus and country code is not allowed
		'0999999999': null,
		// without plus sign
		'351999999​999': '+351999999999',
		'351199999999': '+351199999999',
		'351099999999': null,
		// without plus and country code
		'999999999': '+351999999999',
		'199999999': '+351199999999',
		'099999999': null,
		// invalid length
		'+35108888888': null,
		'+3510999999999': null,
		// sanitization
		'+35 +1 (/99+ 999 - 9999\юв)': '+351999999999'
	},
	decompose: {
		'+351210123456': {
			country: '+351',
			local: '210',
			phone: '123456'
		}
	}
};
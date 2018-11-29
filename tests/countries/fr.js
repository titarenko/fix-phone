module.exports = {
	fix: {
		// international format
		'+33999999999': '+33999999999',
		'+33199999999': '+33199999999',
		'+33099999999': '+33099999999',
		// zero instead of plus and country code is allowed
		'0999999999': '+33999999999',
		'0099999999': null,
		// without plus sign
		'33999999​999': '+33999999999',
		'33199999999': '+33199999999',
		'33099999999': null,
		// absense of plus and country code is not allowed
		'999999999': null,
		// invalid length
		'+3308888888': null,
		'+3309999999990': null,
		// sanitization
		'+ 3  +3 (/99+ 999 - 9999\юв)': '+33999999999',
	},
	decompose: {
		'+33101123456': {
			country: '+33',
			local: '101',
			phone: '123456'
		}
	}
}
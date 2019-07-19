module.exports = {
	fix: {
		// international format
		'+40999999999': '+40999999999',
		'+40199999999': '+40199999999',
		'+40099999999': '+40099999999',
		// zero instead of plus and country code is allowed
		'0999999999': '+40999999999',
		'0099999999': null,
		// additional zero before the client number
		'+400999999999': '+40999999999',
		'40099999​9999': '+40999999999',
		'0999999999': '+40999999999',
		// without plus sign
		'40999999999': '+40999999999',
		'40199999999': '+40199999999',
		'+40 091 999 9955' : '+40919999955',
		'40099999999': null,
		'400999999955' : '+40999999955',
		// absense of plus and country code is allowed
		'999999999': '+40999999999',
		'99999999': null,
		// invalid length
		'+4008888888': null,
		'+401999999999': null,
		// sanitization
		'+ 4  +0 (/99+ 999 - 9999\юв)': '+40999999999',
	},
	decompose: {
		'+40734556677': {
			country: '+40',
			local: '734',
			phone: '556677'
		}
	}
};

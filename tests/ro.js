module.exports = {
	// international format
	'+40999999999': '+40999999999',
	'+40199999999': '+40199999999',
	'+40099999999': '+40099999999',
	// zero instead of plus and country code is allowed
	'0999999999': '+40999999999',
	'0099999999': null,
	// additional zero before the client number
	'+400999999999': '+40999999999',
	'400999999999': '+40999999999',
	'0999999999': '+40999999999',
	// without plus sign
	'40999999999': '+40999999999',
	'40199999999': '+40199999999',
	'40099999999': null,
	// absense of plus and country code is not allowed
	'999999999': null,
	// invalid length
	'+4008888888': null,
	'+401999999999': null,
	// sanitization
	'+ 4  +0 (/99+ 999 - 9999\юв)': '+40999999999',
};

module.exports = {
	fix: {
		'123456789' : '+48123456789',
		'48123456789' : '+48123456789',
		'48 690 148 132': '+48690148132',
		'0234567​89' : null,
		'48023456789': null
	},
	decompose: {
		'+48221234567': {
			country: '+48',
			local: '221',
			phone: '234567'
		},
		'0221234567': {
			country: '+48',
			local: '221',
			phone: '234567'
		}
	}
};
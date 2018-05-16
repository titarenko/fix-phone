module.exports = {
	fix: {
		'89199426915': '+79199426915',
		'79285763305': '+79285763305',
		'+79001234567': '+79001234567',
		'86661010101': '+76661010101',
		'+86661010101': '+76661010101',
		'+7900 123 45 67': '+79001234567',
		'(+7900)1234567': '+79001234567',
		'(7900)1234567': '+79001234567',
		'(900)1234567': '+79001234567',
		'(+7900) 123 45 67': '+79001234567',
		'(7900) 123 45 67': '+79001234567',
		'(900) 123 45 67': '+79001234567',
		'(+7 900) 123-45-67': '+79001234567',
		'(7 900) 123-45-67': '+79001234567',
		'+7900-123-4567': '+79001234567',
		'7900-123-4567': '+79001234567',
		'900-123-45-67': '+79001234567',
		'(+7-900)123-45-67': '+79001234567',
		'(7-900)123-45-67': '+79001234567',
		'(900)123-45-67': '+79001234567',
		'+7(900)1234567': '+79001234567',
		'7(900)1234567': '+79001234567',
		'+7 (900) 123-45-67': '+79001234567',
		'7 (900) 123-4567': '+79001234567',
		'(900) 123-4567': '+79001234567',
		'+8 (900) 123-45 67': '+79001234567',
		'8 (900) 123-45 67': '+79001234567',
		'79202983+56': '+77920298356',
		'+93952708344': null,
		'+79202983+56': null,
		'+792 029 83+56': null,
		'+7920-29-83+56': null
	},
	decompose: {
		'+77219998877': {
			country: '+7',
			local: '721',
			phone: '9998877'
		}
	}
}
module.exports = {
  fix: {
    // international format
    '+520001234567': '+520001234567',

    // absense of plus sign
    '520001234567': '+520001234567',

    // absesnse of plus sing and country code
    '0001234567': '+520001234567',

    // absense of country code
    '+0001234567': null,

    // absense of plus sign, country code and local code
    '1234567': null,

    // zero digit insead of plus sign and country code
    '00001234567': '+520001234567',
    '0999123​4567': '+529991234567',

    // invalid length
    '+52000123456': null,
    '+5200012345678': null,

    // sanitization
    '+ 5  +2 (/000+ 123 - 4567\юв)': '+520001234567'
  },
  decompose: {
    '+520001234567': {
      country: '+52',
      local: '000',
      phone: '1234567'
    }
  }
};
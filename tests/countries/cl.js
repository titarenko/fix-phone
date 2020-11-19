module.exports = {
  fix: {
    // international format
    '+56000123456' : '+56000123456',

    // absense of plus sign
    '56001234567' : '+56001234567',

    // absesnse of plus sing and country code
    '001234567' : '+56001234567',
    '331234567' : '+56331234567',

    // absense of country code
    '+001234567': null,

    // // absense of plus sign, country code and local code
    '1234567': null,

    // zero digit instead of plus sign and country code
    '0001234567' : '+56001234567',
    '0331234567' : '+56331234567',

    // invalid length
    '+5600123456' : null,
    '+560012345678' : null,

    // sanitization
    '+ 5  +6 (/00+ 123 - 4567\юв)': '+56001234567'
  },
  decompose: {
    '+56001234567': {
      country: '+56',
      local: '00',
      phone: '1234567'
    }
  }
}
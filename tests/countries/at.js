module.exports = {
  fix: {
    // international format
    '+43000​1234567' : '+430001234567',

    // absense of plus sign
    '430001234567' : '+430001234567',

    // absesnse of plus sing and country code
    '0001234567' : '+430001234567',
    '3331234567' : '+433331234567',

    // "06xxxxxx..." to "+436xxxxx..."
    '0600123​4567' : '+436001234567',

    // absense of country code
    '+00012​34567': null,

    // absense of plus sign, country code and local code
    '1234567': null,

    // zero digit instead of plus sign and country code
    '00001234567' : '+430001234567',
    '0333123​4567' : '+433331234567',

    // invalid length
    '+43000123456' : null,
    '+4300012345678' : null,

    // sanitization
    '+ 4  +30 (/00+ 123 - 4567\юв)': '+430001234567'
  },
  decompose: {
    '+430001234567': {
      country: '+43',
      local: '000',
      phone: '1234567'
    }
  }
}
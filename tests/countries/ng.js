module.exports = {
  fix: {

    // international format
    '+2340001234567' : '+2340001234567',

    // absense of plus sign
    '2340001234567' : '+2340001234567',

    // absesnse of plus sing and country code
    '0001234567' : '+2340001234567',
    '9991234567' : '+2349991234567',

    // absense of country code
    '+0001234567': null,

    // absense of plus sign, country code and local code
    '1234567': null,

    // zero digit instead of plus sign and country code
    '00001234567' : '+2340001234567',
    '0999123​4567' : '+2349991234567',

    // invalid length
    '+234000123456' : null,
    '+23400012345678' : null,

    // sanitization
    '+ 23  +4 (/0001+ 234 - 567\юв)': '+2340001234567'
  },
  decompose: {
    '+2340001234567': {
      country: '+234',
      local: '000',
      phone: '1234567'
    }
  }
}
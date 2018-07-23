module.exports = {
  fix: {

    // international format
    '+2340012345678' : '+2340012345678',

    // absense of plus sign
    '2340012345678' : '+2340012345678',

    // absesnse of plus sing and country code
    '0012345678' : '+2340012345678',
    '9912345678' : '+2349912345678',

    // absense of country code
    '+0012345678': null,

    // absense of plus sign, country code and local code
    '12345678': null,

    // zero digit instead of plus sign and country code
    '00012345678' : '+2340012345678',
    '09912345678' : '+2349912345678',

    // invalid length
    '+234001234567' : null,
    '+23400123456789' : null,

    // sanitization
    '+ 23  +4 (/001+ 234 - 5678\юв)': '+2340012345678'
  },
  decompose: {
    '+2340012345678': {
      country: '+234',
      local: '00',
      phone: '12345678'
    }
  }
}
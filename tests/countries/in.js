module.exports = {
  fix: {
    // international format
    '+918012345678' : '+918012345678',

    // absense of plus sign
    '918012345678' : '+918012345678',

    // absesnse of plus sing and country code
    '8012345678' : '+918012345678',

    // absense of country code
    '+8012345678': null,

    // // absense of plus sign, country code and local code
    '12345678': null,

    // zero digit instead of plus sign and country code
    '08012345678' : '+918012345678',

    // invalid length
    '+91801234567' : null,

    // sanitization
    '+ 9  +1 (/80+ 123 - 45678\юв)': '+918012345678',

    //other sign (dashes,'(', ')' - for example) between country code
    '91-80-12345678': '+918012345678',

    //country code without "+"
    '91 80 12345678':'+918012345678',

    // 0 insted country code
    '0 80 12345678': '+918012345678',

    //without country code
    '80 12345678': '+918012345678'
  },
  decompose: {
    '+918012345678': {
      country: '+91',
      local: '80',
      phone: '12345678'
    }
  }
}

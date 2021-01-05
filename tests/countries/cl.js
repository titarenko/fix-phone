module.exports = {
  fix: {
    // international format
    '+56000123456' : '+56000123456',
    '+56976589663' : '+56976589663',

    // absense of plus sign
    '56001234567' : '+56001234567',
    '56976589663' : '+56976589663',

    // absesnse of plus sing and country code
    '001234567' : '+56001234567',
    '331234567' : '+56331234567',

    // absense of country code
    '+001234567': null,

    //with one number of local code
    '+5621234567': '+5621234567',

    // // absense of plus sign, country code and local code
    '1234567': null,

    // zero digit instead of plus sign and country code
    '0001234567' : '+56001234567',
    '0331234567' : '+56331234567',

    // invalid length
    '+560012345' : null,
    '+560012345678' : null,

    // sanitization
    '+ 5  +6 (/00+ 123 - 4567\юв)': '+56001234567',

    //spaces between country code
    '56 00 1234567': '+56001234567',

    //other sign (dashes,'(', ')' - for example) between country code
    '56-00-1234567': '+56001234567',

    // country code with one sign ('2' only)
    '5621234567':'+5621234567',
  },
  decompose: {
    '+56001234567': {
      country: '+56',
      local: '00',
      phone: '1234567'
    },
    '+5621234567': {
      country: '+56',
      local: '2',
      phone: '1234567'
    }
  }
}

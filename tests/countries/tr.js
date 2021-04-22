module.exports = {
  fix: {
    // international format
    '+902122845724': '+902122845724',

    // absense of plus sign
    '902122845724': '+902122845724',

    // absesnse of plus sing and country code
    '2122845724': '+902122845724',

    // absense of country code
    '+2122845724': null,

    // absense of plus sign, country code and local code
    '2845724': null,

    // zero digit insead of plus sign and country code
    '02122845724': '+902122845724',

    // invalid length
    '+90212284572': null,
    '+9021228457249': null,

    // sanitization
    '+ 90 (/212+ 284 - 5724\юв)': '+902122845724'
  },
  decompose: {
    '+902122845724': {
      country: '+90',
      local: '212',
      phone: '2845724'
    }
  }
};
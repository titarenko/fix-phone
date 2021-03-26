module.exports = {
  fix: {
    // international format
    '+18678724653': '+18678724653',

    // absense of plus sign
    '18678724653': '+18678724653',

    // absesnse of plus sing and country code
    '8678724653': '+18678724653',

    // absense of country code
    '+8678724653': null,

    // absense of plus sign, country code and local code
    '8724653': null,

    // zero digit insead of plus sign and country code
    '00008724653': '+10008724653',
    '08678724653': '+18678724653',

    // invalid length
    '+1867872465': null,
    '+186787246538': null,

    // sanitization
    '+ 1 (/867+ 872 - 4653\юв)': '+18678724653'
  },
  decompose: {
    '+18678724653': {
      country: '+1',
      local: '867',
      phone: '8724653'
    }
  }
};
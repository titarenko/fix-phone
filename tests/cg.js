module.exports = {
  /*
  Республика Конго
  Код страны: +242
  Локальный код: 2
  Номер абонента: 7
  */

  // international format
  '+242001234567': '+242001234567',

  '242001234567': '+242001234567',

  '001234567': '+242001234567',

  // absense of country code is disallowed
  '+001234567': null,

  // absense of plus sign, country code and local code is disallowed
  '1234567': null,

  '0001234567': '+242001234567',
  '0991234567': '+242991234567',

  // invalid length
  '+24200123456': null,
  '+2420012345678': null,

  // sanitization
  '+ 2  +4 (/200+ 123 - 4567\юв)': '+242001234567'
}
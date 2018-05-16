var tools = require('../tools')

var config = {
  countryCode: '+34',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 6,
  hasLocalPrefix: function (phone) {
    return false
  }
}

var fixEsPhoneBuilder = tools.fixPhoneBuilder(9, 12, config);

var fixEsPhone = function (phone) {
  if (/^0/.test(phone) && phone.length < 10 || /^340/.test(phone) && phone.length < 12) {
    return null
  }
  return fixEsPhoneBuilder(phone)
}

module.exports = {
  fix: fixEsPhone,
  decompose: tools.decomposeBuilder(fixEsPhone, config)
}

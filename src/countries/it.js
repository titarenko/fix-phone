var tools = require('../tools')

var config = {
  countryCode: '+39',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return false
  }
}

var fixItPhoneBuilder = tools.fixPhoneBuilder(10, 13, config);

var fixItPhone = function (phone) {

  if (/^0/.test(phone) && phone.length < 11) {
    return null
  }
  return fixItPhoneBuilder(phone)
}

module.exports = {
  fix: fixItPhone,
  decompose: tools.decomposeBuilder(fixItPhone, config)
}

var tools = require('../tools')

var config = {
  countryCode: '+351',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 6,
  hasLocalPrefix: function (phone) {
    return false
  }
}

var fixPtPhoneBuilder = tools.fixPhoneBuilder(9, 13, config);

var fixPtPhone = function (phone) {
  if (/^3510/.test(phone) && phone.length < 13 || (/^0/.test(phone) && phone.length < 10)) {
    return null
  }
  return fixPtPhoneBuilder(phone)
}

module.exports = {
  fix: fixPtPhone,
  decompose: tools.decomposeBuilder(fixPtPhone, config)
}

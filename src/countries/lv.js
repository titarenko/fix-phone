var tools = require('../tools')

var config = {
  countryCode: '+371',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 5,
  hasLocalPrefix: function (phone) {
    return false
  }
}

var fixLvPhoneBuilder = tools.fixPhoneBuilder(8, 12, config);

var fixLvPhone = function (phone) {
  var reversed = tools.reverseString(phone)
  if(/^.{8}[0]/.test(reversed)) {
    return null
  }
  return fixLvPhoneBuilder(phone)
}

module.exports = {
  fix: fixLvPhone,
  decompose: tools.decomposeBuilder(fixLvPhone, config)
}

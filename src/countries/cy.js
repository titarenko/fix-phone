var tools = require('../tools')

var config = {
  countryCode: '+357',
  countryLocalPrefix: '',
  localCodeLength: 2,
  phoneLength: 6,
  hasLocalPrefix: function (phone) {
    return false
  }
}

var fixCyPhoneBuilder = tools.fixPhoneBuilder(8, 12, config);

var fixCyPhone = function (phone) {
  var reversed = tools.reverseString(phone)
  if(/^.{7}[0]/.test(reversed)) {
    return null
  }
  return fixCyPhoneBuilder(phone)
}

module.exports = {
  fix: fixCyPhone,
  decompose: tools.decomposeBuilder(fixCyPhone, config)
}

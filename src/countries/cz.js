var tools = require('../tools')

var config = {
  countryCode: '+420',
  countryLocalPrefix: '',
  localCodeLength: 2,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return false
  }
}

var fixCzPhoneBuilder = tools.fixPhoneBuilder(9, 13, config);

function fixCzPhone (phone) {
  var reversed = tools.reverseString(phone)
  if(/^.{8}[0]/.test(reversed)) {
    return null
  }
  return fixCzPhoneBuilder(phone)
}

module.exports = {
  fix: fixCzPhone,
  decompose: tools.decomposeBuilder(fixCzPhone, config)
}

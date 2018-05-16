var tools = require('../tools')

var config = {
  countryCode: '+386',
  countryLocalPrefix: '',
  localCodeLength: 1,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return phone.length >= 9 && phone[0] == '0'
  }
}

var fixSiPhoneBuilder = tools.fixPhoneBuilder(8, 12, config);

function fixSiPhone (phone) {
  var reversed = tools.reverseString(phone)
  if(/^.{7}[0]/.test(reversed)) {
    return null
  }
  return fixSiPhoneBuilder(phone)
}

module.exports = {
  fix: fixSiPhone,
  decompose: tools.decomposeBuilder(fixSiPhone, config)
}

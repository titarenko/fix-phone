var tools = require('../tools')

var config = {
  countryCode: '+421',
  countryLocalPrefix: '',
  localCodeLength: 2,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return phone.length >= 10 && phone[0] == '0'
  }
}

var fixSkPhoneBuilder = tools.fixPhoneBuilder(9, 13, config);

function fixSkPhone (phone) {
  var reversed = tools.reverseString(phone)
  if(/^.{8}[0]/.test(reversed)) {
    return null
  }
  return fixSkPhoneBuilder(phone)
}

module.exports = {
  fix: fixSkPhone,
  decompose: tools.decomposeBuilder(fixSkPhone, config)
}

var tools = require('../tools')

var config = {
  countryCode: '+385',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: function (phone) {
    return phone.length - 3 - 4
  },
  hasLocalPrefix: function (phone) {
    return phone.length >= 9 && phone[0] == '0'
  }
}

var fixHrPhoneWithFiveNumberInPhoneNumber = tools.fixPhoneBuilder(8, 12, config);
var fixHrPhoneWithSixNumberInPhoneNumber = tools.fixPhoneBuilder(9, 13, config);

var fixHrPhone = function (phone) {
  var reversed = tools.reverseString(phone)
  if(/^.{8}[0]/.test(reversed)) {
    return null
  }
  return fixHrPhoneWithSixNumberInPhoneNumber(phone)
    || fixHrPhoneWithFiveNumberInPhoneNumber(phone)
}

module.exports = {
  fix: fixHrPhone,
  decompose: tools.decomposeBuilder(fixHrPhone, config)
}

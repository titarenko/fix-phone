var tools = require('../tools')

var config = {
  countryCode: '+48',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 6,
  hasLocalPrefix: function (phone) {
    return phone.length >= 9 && phone[0] == '0'
  }
}

var fixPlPhoneBuilder = tools.fixPhoneBuilder(9, 12, config);

var fixPlPhone = function (phone) {
  phone = tools.getSanitizedPhone(phone)

  var reversed = tools.reverseString(phone)
  if(/^.{8}[0]/.test(reversed)) {
    return null
  }
  return fixPlPhoneBuilder(phone)
}

module.exports = {
  fix: fixPlPhone,
  decompose: tools.decomposeBuilder(fixPlPhone, config)
}

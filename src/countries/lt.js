var tools = require('../tools')

var config = {
  countryCode: '+370',
  countryLocalPrefix: '',
  localCodeLength: 2,
  phoneLength: 6,
  hasLocalPrefix: function (phone) {
    return phone.length >= 9 && phone[0] == '8'
  }
}

var fixLtPhoneBuilder = tools.fixPhoneBuilder(8, 12, config);

var fixLtPhone = function (phone) {
  var reverced = tools.reverseString(phone)
  if(/^.{7}[08]/.test(reverced)) {
    return null
  }
  return fixLtPhoneBuilder(phone)
}

module.exports = {
  fix: fixLtPhone,
  decompose: tools.decomposeBuilder(fixLtPhone, config)
}

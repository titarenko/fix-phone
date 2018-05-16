var tools = require('../tools')

var config = {
  countryCode: '+372',
  countryLocalPrefix: '',
  localCodeLength: 1,
  phoneLength: 6,
  hasLocalPrefix: function (phone) {
    return false
  }
}

var fixEePhoneWithOneNumberInLocalCode = tools.fixPhoneBuilder(7, 11, config);
var fixEePhoneWithTwoNumberInLocalCode = tools.fixPhoneBuilder(8, 12, config);

var fixEePhone = function (phone) {
  var localCode = tools.getLocalCode(config, phone)
  var reversed = tools.reverseString(phone)
  if(/^.{7}[0]/.test(reversed)) {
    return null
  }
  return localCode.length > 1
    ? fixEePhoneWithTwoNumberInLocalCode(phone)
    : fixEePhoneWithOneNumberInLocalCode(phone)
}

module.exports = {
  fix: fixEePhone,
  decompose: tools.decomposeBuilder(fixEePhone, config)
}

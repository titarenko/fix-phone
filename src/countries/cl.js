var tools = require('../tools')

var config = {
  countryCode: '+56',
  countryLocalPrefix: '',
  localCodeLength: 2,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return phone.length >= 10 && phone[0] == '0'
  }
}

var fixClPhoneWithOneNumberInLocalCode = tools.fixPhoneBuilder(8, 11, config);
var fixClPhoneWithTwoNumberInLocalCode = tools.fixPhoneBuilder(9, 12, config);

var fixClPhone = function (phone) {
  var localCode = tools.getLocalCode(config, phone)

  // Shortened mobile numbers case
  if (Number(localCode) >= 3 && Number(localCode) < 10) {
    return fixClPhoneWithTwoNumberInLocalCode('9' + phone)
  }

  return localCode.length > 1
    ? fixClPhoneWithTwoNumberInLocalCode(phone)
    : fixClPhoneWithOneNumberInLocalCode(phone)
}

module.exports = {
  fix: fixClPhone,
  decompose: tools.decomposeBuilder(fixClPhone, config)
}

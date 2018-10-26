var tools = require('../tools')

var config = {
  countryCode: '+43',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return phone.length >= 11 && phone[0] == '0'
  }
}

var fixPhone = tools.fixPhoneBuilder(10, 13, config);
var fixAtPhone = function(phone) {
  if (phone[0] == '0' && phone[1] == '6') {
    const prefix = '+43'
    phone = prefix + phone.substr(1)
  }
  return fixPhone(phone)
}

module.exports = {
  fix: fixAtPhone,
  decompose: tools.decomposeBuilder(fixAtPhone, config)
}
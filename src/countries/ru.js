var tools = require('../tools')

var config = {
  countryCode: '+7',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return phone.length > 10 && phone[0] == '8'
  }
}

var fixRuPhoneWithCorrectNumber = tools.fixPhoneBuilder(10, 12, config);

var fixRuPhone = function (phone) {
  phone = phone[0] === '+' && phone[1] === '8' ? phone.slice(1) : phone
  return fixRuPhoneWithCorrectNumber(phone)
}

module.exports = {
  fix: fixRuPhone,
  decompose: tools.decomposeBuilder(fixRuPhone, config)
}

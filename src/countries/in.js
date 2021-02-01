var tools = require('../tools')

var config = {
  countryCode: '+91',
  countryLocalPrefix: '',
  localCodeLength: 2,
  phoneLength: 8,
  hasLocalPrefix: function (phone) {
    return phone.length >= 10 && phone[0] == '0'
  }
}

var fixInPhone = tools.fixPhoneBuilder(10, 13, config);

module.exports = {
  fix: fixInPhone,
  decompose: tools.decomposeBuilder(fixInPhone, config)
}

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

var fixAtPhone = tools.fixPhoneBuilder(10, 13, config);

module.exports = {
  fix: fixAtPhone,
  decompose: tools.decomposeBuilder(fixAtPhone, config)
}
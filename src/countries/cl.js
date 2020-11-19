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

var fixAtPhone = tools.fixPhoneBuilder(9, 12, config);

module.exports = {
  fix: fixAtPhone,
  decompose: tools.decomposeBuilder(fixAtPhone, config)
}
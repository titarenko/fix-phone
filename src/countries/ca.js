var tools = require('../tools')

var config = {
  countryCode: '+1',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return phone.length > 10 && phone[0] == '0'
  }
}

var fixCaPhone = tools.fixPhoneBuilder(10, 12, config);

module.exports = {
  fix: fixCaPhone,
  decompose: tools.decomposeBuilder(fixCaPhone, config)
}

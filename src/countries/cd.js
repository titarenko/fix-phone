var tools = require('../tools')

var config = {
  countryCode: '+243',
  countryLocalPrefix: '',
  localCodeLength: 1,
  phoneLength: 8,
  hasLocalPrefix: function (phone) {
    return phone.length >= 10 && phone[0] == '0'
  }
}

var fixCdPhone = tools.fixPhoneBuilder(7, 13, config);

module.exports = {
  fix: fixCdPhone,
  decompose: tools.decomposeBuilder(fixCdPhone, config)
}

var tools = require('../tools')

var config = {
  countryCode: '+242',
  countryLocalPrefix: '',
  localCodeLength: 2,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return phone.length >= 10 && phone[0] == '0'
  }
}

var fixCgPhone = tools.fixPhoneBuilder(9, 13, config);

module.exports = {
  fix: fixCgPhone,
  decompose: tools.decomposeBuilder(fixCgPhone, config)
}

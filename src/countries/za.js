var tools = require('../tools')

var config = {
  countryCode: '+27',
  countryLocalPrefix: '',
  localCodeLength: 2,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return phone.length >= 10 && phone[0] == '0'
  }
}

var fixZaPhone = tools.fixPhoneBuilder(7, 12, config);

module.exports = {
  fix: fixZaPhone,
  decompose: tools.decomposeBuilder(fixZaPhone, config)
}

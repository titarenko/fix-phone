var tools = require('../tools')

var config = {
  countryCode: '+52',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return phone.length >= 11 && phone[0] == '0'
  }
}

var fixMxPhone = tools.fixPhoneBuilder(10, 13, config);

module.exports = {
  fix: fixMxPhone,
  decompose: tools.decomposeBuilder(fixMxPhone, config)
}

var tools = require('../tools')

var config = {
  countryCode: '+90',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return phone.length > 10 && phone[0] == '0'
  }
}

var fixTrPhone = tools.fixPhoneBuilder(10, 13, config);

module.exports = {
  fix: fixTrPhone,
  decompose: tools.decomposeBuilder(fixTrPhone, config)
}

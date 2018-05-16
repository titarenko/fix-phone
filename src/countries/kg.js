var tools = require('../tools')

var config = {
  countryCode: '+996',
  countryLocalPrefix: '',
  localCodeLength: 1,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return phone.length >= 10 && phone[0] == '0'
  }
}

var fixKgPhone = tools.fixPhoneBuilder(9, 13, config);

module.exports = {
  fix: fixKgPhone,
  decompose: tools.decomposeBuilder(fixKgPhone, config)
}

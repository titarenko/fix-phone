var tools = require('../tools')

var config = {
  countryCode: '+250',
  countryLocalPrefix: '',
  localCodeLength: 1,
  phoneLength: 8,
  hasLocalPrefix: function (phone) {
    return phone.length >= 10 && phone[0] == '0'
  }
}

var fixRwPhone = tools.fixPhoneBuilder(7, 13, config);

module.exports = {
  fix: fixRwPhone,
  decompose: tools.decomposeBuilder(fixRwPhone, config)
}

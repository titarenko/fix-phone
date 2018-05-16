var tools = require('../tools')

var config = {
  countryCode: '+7',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return phone.length > 10 && phone[0] == '8'
  }
}

var fixKzPhone = tools.fixPhoneBuilder(10, 12, config);

module.exports = {
  fix: fixKzPhone,
  decompose: tools.decomposeBuilder(fixKzPhone, config)
}

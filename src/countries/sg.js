var tools = require('../tools')

var config = {
  countryCode: '+65',
  countryLocalPrefix: '',
  localCodeLength: 2,
  phoneLength: 6,
  hasLocalPrefix: function (phone) {
    return phone.length >= 10 && phone[0] == '0'
  }
}

var fixSgPhone = tools.fixPhoneBuilder(8, 11, config);

module.exports = {
  fix: fixSgPhone,
  decompose: tools.decomposeBuilder(fixSgPhone, config)
}

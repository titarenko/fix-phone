var tools = require('../tools')

var config = {
  countryCode: '+234',
  countryLocalPrefix: '',
  localCodeLength: 1,
  phoneLength: 8,
  hasLocalPrefix: function (phone) {
    return phone.length >= 10 && phone[0] == '0'
  }
}

var fixNgPhone = tools.fixPhoneBuilder(7, 13, config);

module.exports = {
  fix: fixNgPhone,
  decompose: tools.decomposeBuilder(fixNgPhone, config)
}

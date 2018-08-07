var tools = require('../tools')

var config = {
  countryCode: '+234',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return phone.length >= 11 && phone[0] == '0'
  }
}

var fixNgPhone = tools.fixPhoneBuilder(9, 14, config);

module.exports = {
  fix: fixNgPhone,
  decompose: tools.decomposeBuilder(fixNgPhone, config)
}

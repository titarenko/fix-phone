var tools = require('../tools')

var config = {
  countryCode: '+62',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return false
  },
}

var fixPhoneShort = tools.fixPhoneBuilder(10, 13, config);
var fixPhoneLong = tools.fixPhoneBuilder(10, 14, config);

var fixIdPhone = function (phone) {
  phone = phone.replace(/^(0{1,2})/, '')
  phone = phone.replace(/^\+/, '')
  var localCodeLength = tools.getLocalCode(config, phone).length
  if (localCodeLength === 4) {
    return fixPhoneLong(phone)
  } else {
    return fixPhoneShort(phone)
  }
}

module.exports = {
  fix: fixIdPhone,
  decompose: tools.decomposeBuilder(fixIdPhone, config)
}

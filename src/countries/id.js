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

var fixIdPhoneBuilder = tools.fixPhoneBuilder(10, 13, config);

var fixIdPhone = function (phone) {
  phone = phone.replace(/^(0{1,2})/, '')
  phone = phone.replace(/^\+/, '')
  return fixIdPhoneBuilder(phone)
}

module.exports = {
  fix: fixIdPhone,
  decompose: tools.decomposeBuilder(fixIdPhone, config)
}

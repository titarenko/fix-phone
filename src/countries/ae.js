var tools = require('../tools')

const config = {
  countryCode: '+971',
  countryLocalPrefix: '',
  localCodeLength: 2,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return false
  }
}

const fixAePhoneBuilder = tools.fixPhoneBuilder(9, 13, config);

var fixAePhone = function (phone) {
  phone = phone.replace(/^(0{1})/, '')
  phone = phone.replace(/^\+/, '')
  return fixAePhoneBuilder(phone)
}

module.exports = {
  fix: fixAePhone,
  decompose: tools.decomposeBuilder(fixAePhone, config)
}
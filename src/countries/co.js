var tools = require('../tools')

var config = {
  countryCode: '+57',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return false
  }
}

var fixCoMobilePhone = tools.fixPhoneBuilder(10, 13, config);

var fixCoPhone = function (phone) {
  phone = phone.replace(/[^\d+]/g, '')

  if(/^(\+|)(57|)0/.test(phone)) {
    return null
  }

  return fixCoMobilePhone(phone)
}

module.exports = {
  fix: fixCoPhone,
  decompose: tools.decomposeBuilder(fixCoPhone, config)
}

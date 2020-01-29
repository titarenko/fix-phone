var tools = require('../tools')

var config = {
  countryCode: '+966',
  countryLocalPrefix: '',
  localCodeLength: 2,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return false
  }
}

var fixPhone = tools.fixPhoneBuilder(9, 13, config);

var fixSaPhone = function (phone) {
  phone = phone.replace(/[^\d+]/g, '')

  if (phone.length === 10) {
    phone = phone.replace(/^0/, '')
  } else if (/^(\+|)(966|)0/.test(phone)) {
    return null
  }

  return fixPhone(phone)
}

module.exports = {
  fix: fixSaPhone,
  decompose: tools.decomposeBuilder(fixSaPhone, config)
}

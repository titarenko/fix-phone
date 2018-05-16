var tools = require('../tools')

var config = {
  countryCode: '+40',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 6,
  hasLocalPrefix: function (phone) {
    return false
  }
}

var fixRoPhoneBuilder = tools.fixPhoneBuilder(9, 12, config);

var fixRoPhone = function (phone) {
  phone = tools.getSanitizedPhone(phone)
  if (/^(00)|(400)/.test(phone) && phone.length < 12) {
    return null
  }
  if (!/^(400)|(0)|(\+400)/.test(phone) && phone.length < 10) {
    return null
  }
  if (/^\+400/.test(phone) && phone.length > 12) {
    phone = phone.replace(/^(\+400)/, '+40')
  }
  if (/^400/.test(phone) && phone.length > 11) {
    phone = phone.replace(/^(400)/, '40')
  }
  return fixRoPhoneBuilder(phone);
}

module.exports = {
  fix: fixRoPhone,
  decompose: tools.decomposeBuilder(fixRoPhone, config)
}

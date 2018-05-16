var tools = require('../tools')

var config = {
  countryCode: '+33',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 6,
  hasLocalPrefix: function (phone) {
    return phone.length >= 10 && phone[0] == '0'
  }
}

var fixFrPhoneBuilder = tools.fixPhoneBuilder(9, 12, config);

var fixFrPhone = function (phone) {
  phone = tools.getSanitizedPhone(phone)
  if (/^00/.test(phone)) {
    return null
  }
  var pattern = /^(330)|(0)|(\+331)/
  if (!pattern.test(phone) && phone.length < 10) {
    return null
  }
  if (!(/^\+330/.test(phone) && phone.length < 13)) {
    phone = phone.replace(/^(\+330)|(330)|(\+0)/, '+33')
  }
  return fixFrPhoneBuilder(phone)
}

module.exports = {
  fix: fixFrPhone,
  decompose: tools.decomposeBuilder(fixFrPhone, config)
}

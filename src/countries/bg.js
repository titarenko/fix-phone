var tools = require('../tools')

var config = {
  countryCode: '+359',
  countryLocalPrefix: '',
  localCodeLength: 2,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return phone.length >= 8 && phone[0] == '0'
  }
}

var fixBgCityPhone = tools.fixPhoneBuilder(8, 12, config);
var fixBgPhoneMobile = tools.fixPhoneBuilder(9, 13, config);

var fixBgPhone = function (phone) {
  if(/^0/.test(phone) && phone.length < 10) {
    return null
  }
  if(/^0/.test(phone) && phone.length < 11) {
    phone = phone.replace(/^(0)/, '359')
  }
  var localCode = tools.getLocalCode(config, phone)
  return localCode.length > 1
    ? fixBgPhoneMobile(phone)
    : fixBgCityPhone(phone)
}

module.exports = {
  fix: fixBgPhone,
  decompose: tools.decomposeBuilder(fixBgPhone, config)
}

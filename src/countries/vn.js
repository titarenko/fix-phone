var tools = require('../tools')

var config = {
  countryCode: '+84',
  countryLocalPrefix: '',
  localCodeLength: 2,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return false
  }
}

var fixVnShortPhone = tools.fixPhoneBuilder(8, 11, config);
var fixVnLongPhone = tools.fixPhoneBuilder(9, 12, config);

var fixVnPhone = function (phone) {
  phone = phone.replace(/[^\d\+]/g, '').replace(/^00/g, '').replace(/^0/g, '')
  var localCode = tools.getLocalCode(config, phone)
  return localCode.length > 1
    ? fixVnLongPhone(phone)
    : fixVnShortPhone(phone)
}

module.exports = {
  fix: fixVnPhone,
  decompose: tools.decomposeBuilder(fixVnPhone, config)
}

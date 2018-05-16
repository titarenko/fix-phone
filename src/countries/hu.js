var tools = require('../tools')

var config = {
  countryCode: '+36',
  countryLocalPrefix: '',
  localCodeLength: 2,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return phone.length > 10 && phone[0] == '0'
  }
}

var fixHuShortPhone = tools.fixPhoneBuilder(8, 11, config);
var fixHuLongPhone = tools.fixPhoneBuilder(9, 12, config);

var fixHuPhone = function (phone) {
  phone = tools.getSanitizedPhone(phone)
  if(phone.length === 9) {
    var shortPattern = /^.{2}[0]/
    if(shortPattern.test(phone)) {
      return null
    }
  }
  if(/^36/.test(phone) && phone.length === 11) {
    var longPattern = /^.{2}[0]/
    if(longPattern.test(phone)) {
      return null
    }
  }
  phone = phone.replace(/^00/g, '')
  if (phone.length > 9 && (phone[0] == '0' && phone[1] == '6')) {
    phone = phone.slice(2)
  }
  var localCode = tools.getLocalCode(config, phone)
  return localCode.length > 1
    ? fixHuLongPhone(phone)
    : fixHuShortPhone(phone)
}

module.exports = {
  fix: fixHuPhone,
  decompose: tools.decomposeBuilder(fixHuPhone, config)
}

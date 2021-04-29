var tools = require('../tools')

var config = {
  countryCode: '+49',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 8,
  hasLocalPrefix: function (phone) {
    return false
  }
}

var fixDeShortPhone = tools.fixPhoneBuilder(9, 13, config);
var fixDe12digit = tools.fixPhoneBuilder(9, 12, config);
var fixDe11digit = tools.fixPhoneBuilder(9, 11, config);
var fixDe10digit = tools.fixPhoneBuilder(8, 11, config);
var fixDeLongPhone = tools.fixPhoneBuilder(10, 14, config);

var fixDePhone = function (phone) {
  phone = tools.getSanitizedPhone(phone)
  if (/^00/.test(phone)) {
    return null
  }

  if (phone.length === 8 && phone[0] != 0) {
    phone = '+49' + phone
  } else if (phone.length < 10 && /^06/.test(phone)) {
    phone = phone.replace(/^(0)/, '+49')
  } else {
    phone = phone.replace(/^(06)/, '+496')
    phone = phone.replace(/^(02)/, '+492')
    phone = phone.replace(/^(0)/, '+49')
  }
  var localCode = tools.getLocalCode(config, phone)
  var fixCondition12digit = (localCode.length < 2 && phone.length === 12)
    || localCode.length === 1 && phone.length === 11

  if (fixCondition12digit) {
    return fixDe12digit(phone)
  }
  if (localCode.length < 2 && phone.length === 11) {
    return fixDe11digit(phone)
  }
  if (localCode.length < 2 && phone.length === 10) {
    return fixDe10digit(phone)
  }
  return localCode.length > 2
    ? fixDeLongPhone(phone)
    : fixDeShortPhone(phone)
}

module.exports = {
  fix: fixDePhone,
  decompose: tools.decomposeBuilder(fixDePhone, config)
}

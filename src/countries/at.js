var tools = require('../tools')

var shortConfig = {
  countryCode: '+43',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return phone.length >= 11 && phone[0] == '0'
  }
}

var longConfig = {
  countryCode: '+43',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 8,
  hasLocalPrefix: function (phone) {
    return phone && phone.length >= 12 && phone[0] == '0'
  }
}

var fixShortAtPhone = tools.fixPhoneBuilder(10, 13, shortConfig);
var fixLongAtPhone = tools.fixPhoneBuilder(11, 14, longConfig);

var fixAtPhone = function(phone) {
  phone = tools.getSanitizedPhone(phone)
  phone = phone.replace(/\++/, '')
  phone = phone.replace(/^0+/, '')
  var localCodeLength = tools.getLocalCode(shortConfig, phone).length
  if (localCodeLength === 4 && phone.length > 10) {
    return fixLongAtPhone(phone)
  } else {
    return fixShortAtPhone(phone)
  }
}

const decomposeLongPhone = tools.decomposeBuilder(fixAtPhone, longConfig)
const decomposeShortPhone = tools.decomposeBuilder(fixAtPhone, shortConfig)

var decomposeAtPhone = function (phone) {
  var short = decomposeShortPhone(phone)
  if (short.local.length === 4) {
    return decomposeLongPhone(phone)
  } else {
    return short
  }
}

module.exports = {
  fix: fixAtPhone,
  decompose: decomposeAtPhone
}

var tools = require('../tools')

var config = {
  countryCode: '+66',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 6,
  hasLocalPrefix: function (phone) {
    return phone.length >= 9 && phone[0] == '0'
  }
}

var fixThMobilePhone = tools.fixPhoneBuilder(8, 12, config);
var fixThCityPhone = tools.fixPhoneBuilder(8, 11, config);

var fixThPhone = function (phone) {
  var localCode = tools.getLocalCode(config, phone)
  if ([2, 3, 4, 5, 7].indexOf(Number(localCode[0])) != -1) {
    return fixThCityPhone(phone)
  } else {
    return fixThMobilePhone(phone)
  }
}

module.exports = {
  fix: fixThPhone,
  decompose: tools.decomposeBuilder(fixThPhone, config)
}

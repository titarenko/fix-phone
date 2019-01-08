var tools = require('../tools')

var shortPhoneConfig = {
  countryCode: '+60',
  countryLocalPrefix: '',
  localCodeLength: 2,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return false
  }
}

var longPhoneConfig = {
  countryCode: '+60',
  countryLocalPrefix: '',
  localCodeLength: 2,
  phoneLength: 8,
  hasLocalPrefix: function (phone) {
    return false
  }
}

var fixMyShortPhone = tools.fixPhoneBuilder(9, 12, shortPhoneConfig);
var fixMyLongPhone = tools.fixPhoneBuilder(10, 13, longPhoneConfig);

var fixMyPhone = function (phone) {
  phone = phone.replace(/^(0{1,2})/, '')
  phone = tools.getSanitizedPhone(phone)
  var localCode = tools.getLocalCode(shortPhoneConfig, phone)
  if (localCode.indexOf('11') === 0) {
    localCode = tools.getLocalCode(longPhoneConfig, phone)
    return fixMyLongPhone(phone)
  } else {
    return fixMyShortPhone(phone)
  }
} 

var decomposeLongPhone = tools.decomposeBuilder(fixMyPhone, longPhoneConfig)
var decomposeShortPhone = tools.decomposeBuilder(fixMyPhone, shortPhoneConfig)

function decomposeBuilder (phone) {
  if (decomposeLongPhone(phone).local.indexOf('11') === 0) {
    return decomposeLongPhone(phone)
  } else {
    return decomposeShortPhone(phone)
  }
}

module.exports = {
  fix: fixMyPhone,
  decompose: decomposeBuilder
}

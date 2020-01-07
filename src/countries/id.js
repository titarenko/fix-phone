var tools = require('../tools')

var shortPhoneConfig = {
  countryCode: '+62',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return false
  },
}

var longPhoneConfig = {
  countryCode: '+62',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 8,
  hasLocalPrefix: function (phone) {
    return false
  },
}

var fixPhoneShort = tools.fixPhoneBuilder(10, 13, shortPhoneConfig);
var fixPhoneLong = tools.fixPhoneBuilder(10, 14, longPhoneConfig);

var fixIdPhone = function (phone) {
  if (phone.length === 14) {
    phone = phone.replace(/^620/, '+62')
  }
  phone = phone.replace(/^(0{1,2})/, '')
  phone = phone.replace(/^\+/, '')
  var localCodeLength = tools.getLocalCode(shortPhoneConfig, phone).length
  if (localCodeLength === 4) {
    return fixPhoneLong(phone)
  } else {
    return fixPhoneShort(phone)
  }
}

var decomposeLongPhone = tools.decomposeBuilder(fixIdPhone, longPhoneConfig)
var decomposeShortPhone = tools.decomposeBuilder(fixIdPhone, shortPhoneConfig)

function decomposeIdPhone (phone) {
  var decomposedShortPhone = decomposeShortPhone(phone)
  if (decomposedShortPhone && decomposedShortPhone.local.length === 4) {
    return decomposeLongPhone(phone)
  } else {
    return decomposedShortPhone
  }
}

module.exports = {
  fix: fixIdPhone,
  decompose: decomposeIdPhone
}

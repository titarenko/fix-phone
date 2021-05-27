var tools = require('../tools')

var shortConfig = {
  countryCode: '+385',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 5,
  hasLocalPrefix: function (phone) {
    return false
  }
}

var longConfig = {
  countryCode: '+385',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 6,
  hasLocalPrefix: function (phone) {
    return false
  }
}

var fixShortHrPhone = tools.fixPhoneBuilder(8, 12, shortConfig);
var fixLongHrPhone = tools.fixPhoneBuilder(9, 13, longConfig);

var fixHrPhone = function (phone) {
  phone = tools.getSanitizedPhone(phone)

  var shortLocalCode = tools.getLocalCode(shortConfig, phone)
  var localCodeLength = shortLocalCode.length
  if (shortLocalCode[0] === '0') {
    phone = phone.slice(1 - localCodeLength - shortConfig.phoneLength)
  }
  localCodeLength = tools.getLocalCode(shortConfig, phone).length
  if (localCodeLength === 4) {
    return fixLongHrPhone(phone)
  } else {
    return fixShortHrPhone(phone)
  }
}

const decomposeLongPhone = tools.decomposeBuilder(fixHrPhone, longConfig)
const decomposeShortPhone = tools.decomposeBuilder(fixHrPhone, shortConfig)

var decomposeHrPhone = function (phone) {
  var short = decomposeShortPhone(phone)
  if (short.local.length === 4) {
    return decomposeLongPhone(phone)
  } else {
    return short
  }
}

module.exports = {
  fix: fixHrPhone,
  decompose: decomposeHrPhone
}

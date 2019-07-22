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
  var localCodeLength = tools.getLocalCode(shortConfig, phone).length
  if (tools.getLocalCode(shortConfig, phone)[0] === '0') {
    phone = phone.slice(-(localCodeLength-1  + shortConfig.phoneLength))
  }
  localCodeLength = tools.getLocalCode(shortConfig, phone).length
  if (localCodeLength === 4) {
    phone = phone.slice()
    return fixLongHrPhone(phone)
  } else {
    return fixShortHrPhone(phone)
  }
}

const decomposeLongPhone = tools.decomposeBuilder(fixHrPhone, longConfig)
const decomposeShortPhone = tools.decomposeBuilder(fixHrPhone, shortConfig)

var decomposeHrPhone = function (phone) {
  if (decomposeShortPhone(phone).local.length ===4) {
    return decomposeLongPhone(phone)
  } else {
    return decomposeShortPhone(phone)
  }
}

module.exports = {
  fix: fixHrPhone,
  decompose: decomposeHrPhone
}

var tools = require('../tools')

var config = {
  countryCode: '+60',
  countryLocalPrefix: '',
  localCodeLength: 2,
  phoneLength: 8,
  hasLocalPrefix: function (phone) {
    return false
  }
}

var fixMyShortPhone = tools.fixPhoneBuilder(9, 12, config);
var fixMyLongPhone = tools.fixPhoneBuilder(10, 13, config);
var fixMyMobilePhone = tools.fixPhoneBuilder(10, 13, config);

var fixMyPhone = function (phone) {
  phone = tools.getSanitizedPhone(phone)
  phone = phone.replace(/^(00)/, '')
  phone = phone.replace(/^(0)/, '')

  var localCode = tools.getLocalCode(config, phone)
  if (localCode > 2)
  console.log(phone)

if (localCode.length === 2) {
  return fixMyLongPhone(phone)
} else if (localCode.length === 1) {
  return fixMyShortPhone(phone)
} else if (localCode.length > 2) {

}
/*  if (localCode.length == 2 && phone.length === 13) {
    return fixMyMobilePhone(phone)
  }
  if (localCode.length < 2 && phone.length === 12) {
    return fixMyLongPhone(phone)
  }
  if (localCode.length < 2 && phone.length === 11) {
    return fixMyShortPhone(phone)
  } else {
    return fixMyShortPhone(phone)
  }*/
}

module.exports = {
  fix: fixMyPhone,
  decompose: tools.decomposeBuilder(fixMyPhone, config)
}

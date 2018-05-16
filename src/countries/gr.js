var tools = require('../tools')

var config = {
  countryCode: '+30',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return false
  }
}

var fixGrPhoneBuilder = tools.fixPhoneBuilder(10, 13, config);

var fixGrPhone = function (phone) {
  if(phone.length === 10 && /^0/.test(phone) || phone.length === 12 && /^.{2}[0]/.test(phone)) {
    return null
  }
  return fixGrPhoneBuilder(phone)
}

module.exports = {
  fix: fixGrPhone,
  decompose: tools.decomposeBuilder(fixGrPhone, config)
}

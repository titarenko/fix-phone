var tools = require('../tools')

var config = {
  countryCode: '+380',
  countryLocalPrefix: '0',
  localCodeLength: 3,
  phoneLength: 7,
  hasLocalPrefix: function (phone) {
    return false
  }
}

var fixUaPhone = tools.fixPhoneBuilder(9, 13, config);

module.exports = {
  fix: fixUaPhone,
  decompose: tools.decomposeBuilder(fixUaPhone, config)
}

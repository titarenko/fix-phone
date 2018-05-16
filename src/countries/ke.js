var tools = require('../tools')

var config = {
  countryCode: '+254',
  countryLocalPrefix: '',
  localCodeLength: 3,
  phoneLength: 6,
  hasLocalPrefix: function (phone) {
    return false;
  }
}

var fixKePhoneBase = tools.fixPhoneBuilder(9, 13, config);

function fixKePhone (phone) {
  var sane = tools.getSanitizedPhone(phone);
  if (sane.slice(0, 5) === '+2540') {
    sane = sane.slice(5);
  } else if (sane[0] === '0') {
    sane = sane.slice(1);
  } else if (sane.slice(0, 4) === '2540') {
    sane = sane.slice(4)
  }
  return fixKePhoneBase(sane);
}

module.exports = {
  fix: fixKePhone,
  decompose: tools.decomposeBuilder(fixKePhone, config)
}
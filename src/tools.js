var _ = require('lodash')

module.exports.getSanitizedPhone = getSanitizedPhone
module.exports.reverseString = reverseString
module.exports.fixPhoneBuilder = fixPhoneBuilder
module.exports.decomposeBuilder = decomposeBuilder
module.exports.getLocalCode = getLocalCode

function getSanitizedPhone (phone) {
  var hasPlus = phone && phone[0] === '+'
  var phoneWithoutPlus = hasPlus ? phone.slice(1) : phone
  var sanitizedPhone = phoneWithoutPlus.replace(/[^\d]/g, '')
  return hasPlus ? '+' + sanitizedPhone : sanitizedPhone
}

function reverseString (str) {
  return str.split('').reverse().join('')
}

function fixPhoneBuilder (minLength, maxLength, config) {
  return function (phone) {
    phone = getSanitizedPhone(phone)
    if (phone.length < minLength || phone.length > maxLength) {
      return null;
    }
    var prefix = config.countryCode
    if (config.hasLocalPrefix(phone)) {
      phone = prefix + phone.slice(1);
    }
    var offset = maxLength - phone.length;

    phone = prefix.slice(0, offset) + phone;
    if (phone.slice(0, prefix.length) != prefix) {
      return null;
    }
    return phone;
  };
}

function decomposeBuilder (fixPhone, config) {
  return function (phone) {
    var fixed = fixPhone(phone);
    if (!fixed) {
      return null;
    }
    var phoneLength = _.isFunction(config.phoneLength)
      ? config.phoneLength(fixed)
      : config.phoneLength
    return {
      country: config.countryCode,
      local: config.countryLocalPrefix + fixed.slice(config.countryCode.length, -phoneLength),
      phone: fixed.slice(-phoneLength)
    };
  }
}

function getLocalCode (config, phone) {
  phone = phone.replace(/[^\d\+]/g, '');
  var phoneWithoutPlus = phone[0] == '+' ? phone.slice(1) : phone
  var countryCodeWithoutPlus = config.countryCode.slice(1);

  var hasCountryCode = phoneWithoutPlus.slice(0, countryCodeWithoutPlus.length) == countryCodeWithoutPlus
  var phoneWithoutCountryCode = hasCountryCode
    ? phoneWithoutPlus.slice(countryCodeWithoutPlus.length)
    : phoneWithoutPlus

  var phoneWithoutLocalPrefix = config.hasLocalPrefix(phoneWithoutCountryCode)
    ? phoneWithoutCountryCode.slice(1)
    : phoneWithoutCountryCode

  return phoneWithoutLocalPrefix.slice(0, -config.phoneLength)
}

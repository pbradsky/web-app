import validator from 'validator';

import { getTodaysDate, formatDate } from 'utils/date';

const validateCreateUser = email => {
  const errors = [];

  if (!validator.isEmail(email + '')) {
    errors.push('Please enter a valid email.');
  }

  return errors;
};

const validateSignature = (signature, fullName, date) => {
  const errors = [];

  const today = getTodaysDate();
  const signatureDate = new Date(date);
  if (signatureDate.toString() === 'Invalid Date') {
    errors.push('Please enter the date in a valid format (mm/dd/yyyy).');
  } else if (!validator.equals(formatDate(signatureDate), today)) {
    errors.push('Please enter today\'s date.');
  }
  if (signature.localeCompare(fullName) != 0) {
    errors.push('Please sign your full name.')
  }

  return errors;
};

const validateForm = userInfo => {
  if (!validatePhone(userInfo.phone) ||
      !validateLicense(userInfo.license) || 
      !validateZip(userInfo.zip)) {
    return false;
  }
  return true;
}

const validatePhone = phoneNum => {
  let phonePattern = /^(\+[0-9]{1,2}[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneNum.match(phonePattern) != null;
}

const validateLicense = licenseNum => {
  licenseNum = licenseNum.toLowerCase();
  let licensePattern = /^([0-9]|[a-z]){6,7}$/;
  return licenseNum.match(licensePattern) != null;
}

const validateZip = zipcode => {
  let zipPattern = /^[0-9]{5}$/;
  return zipcode.match(zipPattern) != null;
}

export { validateCreateUser, validateSignature, validateForm, validatePhone, validateLicense, validateZip };
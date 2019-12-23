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
  if (signature.localeCompare(fullName) !== 0) {
    errors.push('Please sign your full name.')
  }

  return errors;
};

const validateForm = userInfo => {
  if (!validatePhone(userInfo.phone) ||
      !validateLicense(userInfo.license, userInfo.state) ||
      !validateZip(userInfo.zip) ||
      !validateFileSize(userInfo.proofOfInsurance) ||
      !validateFileSize(userInfo.driversLicenseFront) ||
      !validateFileSize(userInfo.driversLicenseBack)) {
    return false;
  }
  return true;
}

const validatePhone = phoneNum => {
  const phonePattern = /^(\+[0-9]{1,2}[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneNum.match(phonePattern) != null;
}

// TODO: validate for all states -- currently only validates Washington
const validateLicense = (licenseNum, state) => {
  if (state === 'WA') {
    licenseNum = licenseNum.toLowerCase();
    const licensePattern = /^([a-z]|[0-9]|\*){12}$/;
    return licenseNum.match(licensePattern) != null;
  }
  return true;
}

const validateZip = zipcode => {
  const zipPattern = /^[0-9]{5}$/;
  return zipcode.match(zipPattern) != null;
}

// ensure image is not larger than 10 MB
const validateFileSize = file => {
  const size = file.size;
  if (size > 10 ** 6) {
    return false;
  }
  return true;
}

export { validateCreateUser, validateSignature, validateForm, validatePhone, validateLicense, validateZip, validateFileSize };
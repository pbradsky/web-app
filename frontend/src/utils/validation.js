import validator from 'validator';

import { getTodaysDate, formatDate } from 'utils/date';

const validateCreateUser = email => {
  const errors = [];

  if (!validator.isEmail(email + '')) {
    errors.push('Please enter a valid email.');
  }

  return errors;
};

const validateSignature = signature => {
  return signature && signature.length > 0;
}

const validateSignatureDate = date => {
  const today = getTodaysDate();
  const signatureDate = new Date(date);
  return (
    date &&
    signatureDate.toString() !== 'Invalid Date' &&
    validator.equals(formatDate(signatureDate), today)
  );
}

const validateForm = userInfo => {
  if (!validatePhone(userInfo.phone) ||
      !validateLicense(userInfo.license, userInfo.state) ||
      !validateZip(userInfo.zip)) {
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

const validateUpload = uploadInfo => {
  if (!validateFileUpload(uploadInfo.proofOfInsurance) ||
      !validateFileUpload(uploadInfo.driversLicenseFront) ||
      !validateFileUpload(uploadInfo.driversLicenseBack)) {
    return false;
  }
  return true;
}

// ensure image is not larger than 10 MB & is of right file type
const validateFileUpload = file => {
  const validFileTypes = ['jpg', 'png', 'jpeg'];
  const size = file.size;
  const type = file.type.split('/').pop()
  if (size > 10 ** 7 || !validFileTypes.includes(type)) {
    return false;
  }
  return true;
}

export {
  validateCreateUser,
  validateSignature,
  validateSignatureDate,
  validateForm,
  validatePhone,
  validateLicense,
  validateZip,
  validateUpload,
  validateFileUpload
};
import validator from 'validator';

import { getTodaysDate, formatDate } from 'utils/date';

const validateCreateUser = email => {
  const errors = [];

  if (!validator.isEmail(email + '')) {
    errors.push('Please enter a valid email.');
  }

  return errors;
};

const isValidSignature = signature => {
  return signature && signature.length > 0;
}

const isValidSignatureDate = date => {
  const today = getTodaysDate();
  const signatureDate = new Date(date);
  return (
    date &&
    signatureDate.toString() !== 'Invalid Date' &&
    validator.equals(formatDate(signatureDate), today)
  );
}

const isValidForm = userInfo => {
  if (!isValidPhone(userInfo.phone) ||
      !isValidLicense(userInfo.license, userInfo.state) ||
      !isValidZip(userInfo.zip)) {
    return false;
  }
  return true;
}

const isValidPhone = phoneNum => {
  const phonePattern = /^(\+[0-9]{1,2}[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return (
    phoneNum &&
    phoneNum.match(phonePattern) != null
  );
}

// TODO: validate for all states -- currently only validates Washington
const isValidLicense = (licenseNum, state) => {
  if (!licenseNum || !state) {
    return false;
  }
  if (state === 'WA') {
    licenseNum = licenseNum.toLowerCase();
    const licensePattern = /^([a-z]|[0-9]|\*){12}$/;
    return licenseNum.match(licensePattern) != null;
  }
  return true;
}

const isValidZip = zipcode => {
  const zipPattern = /^[0-9]{5}$/;
  return (
    zipcode &&
    zipcode.match(zipPattern) != null
  );
}

const isValidUpload = uploadInfo => {
  if (!isValidFileUpload(uploadInfo.proofOfInsurance) ||
      !isValidFileUpload(uploadInfo.driversLicenseFront) ||
      !isValidFileUpload(uploadInfo.driversLicenseBack)) {
    return false;
  }
  return true;
}

// ensure image is not larger than 10 MB & is of right file type
const isValidFileUpload = file => {
  if (!file) {
    return false;
  }
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
  isValidSignature,
  isValidSignatureDate,
  isValidForm,
  isValidPhone,
  isValidLicense,
  isValidZip,
  isValidUpload,
  isValidFileUpload
};
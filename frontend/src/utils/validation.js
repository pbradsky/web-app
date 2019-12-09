import validator from 'validator';

import { getTodaysDate, formatDate } from 'utils/date';

const validateCreateUser = email => {
  const errors = [];

  if (!validator.isEmail(email + '')) {
    errors.push('Please enter a valid email.');
  }

  return errors;
};

const validateSignature = date => {
  const errors = [];

  const today = getTodaysDate();
  const signatureDate = new Date(date);
  if (signatureDate.toString() === 'Invalid Date') {
    errors.push('Please enter the date in a valid format (mm/dd/yyyy).');
  } else if (!validator.equals(formatDate(signatureDate), today)) {
    errors.push('Please enter today\'s date.');
  }

  return errors;
};

export { validateCreateUser, validateSignature };
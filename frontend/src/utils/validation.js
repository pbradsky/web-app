import validator from 'validator';

const validateCreateUser = (email) => {
  const errors = [];

  if (!validator.isEmail(email + '')) {
    errors.push('Please enter a valid email.');
  }

  return errors;
};

export { validateCreateUser };
import validator from 'validator';

const sanitizeText = text => {
  return validator.stripLow(text);
};

const sanitizeFormData = formData => {
  formData.fullName = sanitizeText(formData.fullName);

  return formData;
}

export { sanitizeFormData };
import React from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import FormInfoTooltip from '../info';

const FormGroup = ({
  label, tooltip, required, validated, isValid, errorText, value, className, ...rest
}) => {
  // Ensure required fields are tested for length
  if (required) {
    if (isValid === undefined) {
      isValid = value.length > 0;
    }
    if (errorText === undefined) {
      errorText = 'This field is required.';
    }
  }
  const isInvalid = validated && !isValid;
  isValid = validated && isValid;

  return (
    <Form.Group as={Col} className={className}>
      {label && <Form.Label>{label}</Form.Label>}
      {tooltip && <FormInfoTooltip>{tooltip}</FormInfoTooltip>}
      <Form.Control
        required={required}
        isValid={isValid}
        isInvalid={isInvalid}
        value={value}
        {...rest} />
      {errorText &&
        <FormControl.Feedback type='invalid'>
          {errorText}
        </FormControl.Feedback>}
    </Form.Group>
  );
};

export default FormGroup;
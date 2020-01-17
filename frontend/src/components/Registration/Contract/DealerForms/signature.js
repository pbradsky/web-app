import React from 'react';

import Form from 'react-bootstrap/Form';

import { getTodaysDate } from 'utils/date';

const SignatureForm = ({ signatureData, name, errors, onChange }) => {
  const { signature, date } = signatureData;

  return (
    <Form>
      <Form.Row>
        <Form.Group className='col-sm-8'>
          <Form.Label>Signature</Form.Label>
          <Form.Control
            name='signature'
            value={signature}
            onChange={onChange}
            placeholder={name} />
        </Form.Group>
        <Form.Group className='col-sm-4'>
          <Form.Label>Date</Form.Label>
          <Form.Control
            name='date'
            value={date}
            onChange={onChange}
            placeholder={getTodaysDate()} />
        </Form.Group>
      </Form.Row>
      {errors.map((error, index) => <p key={index}>{error}</p>)}
    </Form>
  );
}

export default SignatureForm;
import React from 'react';

import Form from 'react-bootstrap/Form';

import { getTodaysDate } from 'utils/date';

const state = {
  signature: '',
  date: '',
};

const SignatureForm = ({ state, onChangeForm }) => {
  const { signature, date } = state;

  return (
    <Form>
      <Form.Row>
        <Form.Group className='col-sm-8'>
          <Form.Label>Signature</Form.Label>
          <Form.Control
            name='signature'
            value={signature}
            onChange={onChangeForm}
            placeholder='Signature' />
        </Form.Group>
        <Form.Group className='col-sm-4'>
          <Form.Label>Date</Form.Label>
          <Form.Control
            name='date'
            value={date}
            onChange={onChangeForm}
            placeholder={getTodaysDate()} />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}

const SignatureFormStage = {
  state,
  Component: SignatureForm,
}

export default SignatureFormStage;
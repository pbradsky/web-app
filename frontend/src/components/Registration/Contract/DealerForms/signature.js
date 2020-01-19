import React from 'react';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import { ContractFormText, PreambleText } from '../Util/text';

import { withUser } from 'api/Session';
import { getTodaysDate } from 'utils/date';
import { isValidSignature, isValidSignatureDate } from 'utils/validation';

// Stores the state that should be managed by the form manager
const state = {
  signature: '',
  date: '',
};

// A component that renders the form given its state
const SignatureForm = ({ state, validated, onChangeForm, onSubmit }) => {
  const { signature, date } = state;

  return (
    <>
      <h4>Dealer's Permit for Demonstration</h4>
      <Card style={{overflowY: 'scroll', height: '50vh'}}>
        <Card.Body>
          <ContractFormText
            // name={authUser.fullName}
            // address={fullAddress}
            // phone={authUser.phone}
            // license={authUser.license}
            />
          <PreambleText />
        </Card.Body>
      </Card>
      <br />
      <Form
        id='form-stage'
        noValidate
        onSubmit={onSubmit}>
          <Form.Row>
            <Form.Group className='col-sm-8'>
              <Form.Label>Signature</Form.Label>
              <Form.Control
                required
                name='signature'
                value={signature}
                onChange={onChangeForm}
                placeholder='Signature'
                isValid={validated && isValidSignature(signature)}
                isInvalid={validated && !isValidSignature(signature)} />
              <FormControl.Feedback type="invalid">
                Please enter your electronic signature.
              </FormControl.Feedback>
            </Form.Group>
            <Form.Group className='col-sm-4'>
              <Form.Label>Date</Form.Label>
              <Form.Control
                required
                name='date'
                value={date}
                onChange={onChangeForm}
                placeholder={getTodaysDate()}
                isValid={validated && isValidSignatureDate(date)}
                isInvalid={validated && !isValidSignatureDate(date)} />
              <FormControl.Feedback type="invalid">
                Please enter today's date in the format mm/dd/yyyy.
              </FormControl.Feedback>
            </Form.Group>
          </Form.Row>
      </Form>
    </>
  );
}

// Stage object to be used by the form manager
const SignatureFormStage = {
  state,
  Component: withUser(SignatureForm),
}

export default SignatureFormStage;
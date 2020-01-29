import React from 'react';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import FormGroup from '../Util/FormGroup';
import { ContractFormText, VehicleInfoForm, PreambleText } from '../Util/loaner-text';

import { withUser } from 'api/Session';
import { formatAddress } from 'utils/address';
import { getTodaysDate } from 'utils/date';
import { isValidSignature, isValidSignatureDate } from 'utils/validation';

// Stores the state that should be managed by the form manager
const state = () => ({
  signature: '',
  date: '',
});

// A component that renders the form given its state
const SignatureForm = ({ state, validated, onChangeForm, onSubmit, user }) => {
  const { signature, date } = state;

  const fullAddress = formatAddress(user);

  return (
    <>
      <h4>Vehicle Use Agreement - Klein Honda</h4>
      <Card style={{overflowY: 'scroll', height: '50vh'}}>
        <Card.Body>
          <ContractFormText
            name={user.fullName}
            address={fullAddress}
            phone={user.phone}
            license={user.license}
            />
          <VehicleInfoForm
            // Extension of above...
            // Needs more?
            />
          <PreambleText />
        </Card.Body>
      </Card>
      <br />
      <Form id='form-stage' noValidate onSubmit={onSubmit}>
        <Form.Row>
          <FormGroup
            className='col-sm-8'
            label='Signature'
            required
            name='signature'
            value={signature}
            placeholder='Signature'
            onChange={onChangeForm}
            validated={validated}
            isValid={isValidSignature(signature)}
            errorText='Please enter your electronic signature.'
          />
          <FormGroup
            className='col-sm-4'
            label='Date'
            required
            name='date'
            value={date}
            placeholder={getTodaysDate()}
            onChange={onChangeForm}
            validated={validated}
            isValid={isValidSignatureDate(date)}
            errorText={'Please enter today\'s date in the format mm/dd/yyyy.'}
          />
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
import React from 'react';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import { ContractFormText, PreambleText } from '../Util/text';

import { withUser } from 'api/Session';
import { getTodaysDate } from 'utils/date';

// Stores the state that should be managed by the form manager
const state = {
  signature: '',
  date: '',
};

// A component that renders the form given its state
const SignatureForm = ({ state, onChangeForm }) => {
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
    </>
  );
}

// Stage object to be used by the form manager
const SignatureFormStage = {
  state,
  Component: withUser(SignatureForm),
}

export default SignatureFormStage;
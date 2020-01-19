import React from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import FormGroup from '../Util/FormGroup';

import { isValidPhone, isValidLicense, isValidZip } from 'utils/validation'

import STATES from 'constants/states';

const state = userData => () => {
  if (userData && userData.contract) {
    return {
      fullName: userData.fullName,
      phone: userData.phone,
      address: userData.address,
      apt: userData.apt,
      city: userData.city,
      state: userData.state,
      zip: userData.zip,
      license: userData.license,
    }
  }

  return {
    fullName: '',
    phone: '',
    address: '',
    apt: '',
    city: '',
    state: '',
    zip: '',
    license: '',
  };
};

const ContractForm = props => {
  const { validated, onChangeForm, onSubmit } = props;
  const { fullName, phone, address, apt, city, state, zip, license } = props.state;

  return (
    <Form id='form-stage' noValidate onSubmit={onSubmit}>
      <h4>Personal Information</h4>
      <hr />
      <Form.Row>
        <FormGroup
          label='Full Name'
          required
          name='fullName'
          value={fullName}
          placeholder='Full name'
          onChange={onChangeForm}
          validated={validated}
        />
        <FormGroup
          label='Phone Number'
          tooltip='Phone number in the format 555-555-5555'
          required
          name='phone'
          value={phone}
          placeholder='Phone number'
          onChange={onChangeForm}
          validated={validated}
          isValid={isValidPhone(phone)}
          errorText='Please provide a valid phone number.'
        />
      </Form.Row>
      <Form.Row>
        <FormGroup
          label='Street Address'
          required
          name='address'
          value={address}
          placeholder='Street address'
          onChange={onChangeForm}
          validated={validated}
        />
        <FormGroup
          label='Address Line 2'
          tooltip='Appartment, studio, or floor number'
          name='apt'
          value={apt}
          placeholder='Apartment, studio, or floor'
          onChange={onChangeForm}
        />
      </Form.Row>
      <Form.Row>
        <FormGroup
          label='City'
          required
          name='city'
          value={city}
          placeholder='City'
          onChange={onChangeForm}
          validated={validated}
        />
        <Form.Group as={Col}>
          <Form.Label>State</Form.Label>
          <Form.Control
            required
            name='state'
            value={state}
            onChange={onChangeForm}
            isValid={validated && state.length > 0}
            isInvalid={validated && state.length === 0}
            as='select'>
              <option value='' disabled>Choose a state...</option>
              {Object.keys(STATES).map((state, index) => (
                <option key={index} value={STATES[state]}>{state}</option>
              ))}
          </Form.Control>
        </Form.Group>
        <FormGroup
          label='Zip Code'
          required
          name='zip'
          value={zip}
          placeholder='Zip code'
          onChange={onChangeForm}
          validated={validated}
          isValid={isValidZip(zip)}
          errorText='Please provide a valid zip code.'
        />
      </Form.Row>
      <Form.Row>
        <FormGroup
          label={'Driver\'s License Number'}
          tooltip={'License number found on your driver\'s license'}
          required
          name='license'
          value={license}
          placeholder={'Driver\'s license number'}
          onChange={onChangeForm}
          validated={validated}
          isValid={isValidLicense(license, state)}
          errorText='Please provide a valid license number.'
        />
      </Form.Row>
    </Form>
  );
}

const ContractFormStage = {
  state,
  Component: ContractForm,
};

export default ContractFormStage;
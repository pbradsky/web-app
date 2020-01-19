import React from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import FormInfoTooltip from '../Util/info';

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
        <Form.Group as={Col}>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            required
            name='fullName'
            value={fullName}
            onChange={onChangeForm}
            placeholder='Full name' />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Phone Number</Form.Label>
          <FormInfoTooltip>
            Phone number in the format 555-555-5555
          </FormInfoTooltip>
          <Form.Control
            required
            name='phone'
            value={phone}
            onChange={onChangeForm}
            placeholder='Phone number'
            isValid={validated && isValidPhone(phone)}
            isInvalid={validated && !isValidPhone(phone)}
          />
          <FormControl.Feedback type='invalid'>
            Please provide a valid phone number.
          </FormControl.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Street Address</Form.Label>
          <Form.Control
            required
            name='address'
            value={address}
            onChange={onChangeForm}
            placeholder='Street address' />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Address Line 2</Form.Label>
          <FormInfoTooltip>
            Appartment, studio, or floor number
          </FormInfoTooltip>
          <Form.Control
            name='apt'
            value={apt}
            onChange={onChangeForm}
            placeholder='Apartment, studio, or floor' />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>City</Form.Label>
          <Form.Control
            required
            name='city'
            value={city}
            onChange={onChangeForm}
            placeholder='City' />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>State</Form.Label>
          <Form.Control
            required
            name='state'
            value={state}
            onChange={onChangeForm}
            as='select'>
              <option value='' disabled>Choose a state...</option>
              {Object.keys(STATES).map((state, index) => (
                <option key={index} value={STATES[state]}>{state}</option>
              ))}
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            required
            name='zip'
            value={zip}
            onChange={onChangeForm}
            placeholder='Zip code'
            isValid={validated && isValidZip(zip)}
            isInvalid={validated && !isValidZip(zip)}
          />
          <FormControl.Feedback type='invalid'>
            Please provide a valid zip code.
          </FormControl.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Driver's License Number</Form.Label>
          <FormInfoTooltip>
            License number found on your driver's license
          </FormInfoTooltip>
          <Form.Control
            required
            name='license'
            value={license}
            onChange={onChangeForm}
            placeholder={'Driver\'s license number'}
            isValid={validated && isValidLicense(license, state)}
            isInvalid={validated && !isValidLicense(license, state)}
          />
          <FormControl.Feedback type='invalid'>
            Please provide a valid license number.
          </FormControl.Feedback>
        </Form.Group>
      </Form.Row>
    </Form>
  );
}

const ContractFormStage = {
  state,
  Component: ContractForm,
};

export default ContractFormStage;
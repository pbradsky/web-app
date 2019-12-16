import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import STATES from 'constants/states';

const ContractForm = ({ formData, onChange, onSubmit }) => {
  const { fullName, phone, address, apt, city, state, zip, license } = formData;

  const isInvalid = [
    fullName, phone, address, city, state, zip, license
  ].some(field => field === '');

  return (
    <Form>
      <h4>Personal Information</h4>
      <hr />
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            name='fullName'
            value={fullName}
            onChange={onChange}
            placeholder='Johnny Appleseed' />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name='phone'
            value={phone}
            onChange={onChange}
            placeholder='555-333-4444' />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Address</Form.Label>
          <Form.Control
            name='address'
            value={address}
            onChange={onChange}
            placeholder='1234 Main St' />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            name='apt'
            value={apt}
            onChange={onChange}
            placeholder='Apartment, studio, or floor' />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>City</Form.Label>
          <Form.Control
            name='city'
            value={city}
            onChange={onChange}
            placeholder='New York City' />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>State</Form.Label>
          <Form.Control
            name='state'
            value={state}
            onChange={onChange}
            as='select'>
            <option disabled>Choose a state...</option>
            {Object.keys(STATES).map((state, index) => (
              <option key={index} value={STATES[state]}>{state}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Zip</Form.Label>
          <Form.Control
            name='zip'
            value={zip}
            onChange={onChange}
            placeholder='11235' />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>License Number</Form.Label>
          <Form.Control
              name='license'
              value={license}
              onChange={onChange} />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} className='col-md-4 col-sm-12 col-12'>
            <Form.Label>Proof of Insurance</Form.Label>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="custom-file-input"
                id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"
              />
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                Choose file
              </label>
            </div>
        </Form.Group>
        <Form.Group as={Col} className='col-md-4 col-sm-12 col-12'>
            <Form.Label>Driver's License (front)</Form.Label>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="custom-file-input"
                id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"
              />
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                Choose file
              </label>
            </div>
        </Form.Group>
        <Form.Group as={Col} className='col-md-4 col-sm-12 col-12'>
            <Form.Label>Driver's License (back)</Form.Label>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="custom-file-input"
                id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"
              />
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                Choose file
              </label>
            </div>
        </Form.Group>
      </Form.Row>
      <Button
        onClick={onSubmit}
        disabled={isInvalid}>
        Submit
      </Button>
    </Form>
  );
}

export default ContractForm;
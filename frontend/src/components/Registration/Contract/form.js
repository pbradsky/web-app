import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'

import { validatePhone, validateLicense, validateZip, validateFileSize } from 'utils/validation'

import STATES from 'constants/states';

const ContractForm = ({ formData, onChange, onFileChange, onSubmit }) => {
  const { fullName, phone, address, apt, city, state, zip, license, 
    proofOfInsurance, driversLicenseFront, driversLicenseBack, filled } = formData;
  const isNotEmpty = [
    fullName, phone, address, city, state, zip, license, proofOfInsurance, driversLicenseFront, driversLicenseBack
  ].some(field => field === '' || !field);
  return (
    <Form onSubmit={onSubmit}>
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
            placeholder='555-333-4444'
            isInvalid={phone && !validatePhone(phone) && filled}
          />
          <FormControl.Feedback type="invalid">
            Please provide a valid phone number.
          </FormControl.Feedback>
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
            placeholder='11235'
            isInvalid={zip && !validateZip(zip) && filled}
          />
          <FormControl.Feedback type="invalid">
            Please provide a valid zip code.
          </FormControl.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Driver's License Number</Form.Label>
          <Form.Control
              name='license'
              value={license}
              onChange={onChange}
              isInvalid={license && state && !validateLicense(license, state) && filled}
            />
          <FormControl.Feedback type="invalid">
            Please provide a valid license number.
          </FormControl.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} className='col-md-4 col-sm-12 col-12'>
            <Form.Label>Proof of Insurance</Form.Label>
            <div className="custom-file" id='custom'>
              <Form.Control
                type="file"
                className="custom-file-input"
                id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"
                name='proofOfInsurance'
                onChange={onFileChange}
                accept='image/*'
                isInvalid={proofOfInsurance && !validateFileSize(proofOfInsurance)}
              />
              <FormControl.Feedback type="invalid">
                Image exceeds max size of 10 MB.
              </FormControl.Feedback>
              <label id='file-label-001' className="custom-file-label" htmlFor="inputGroupFile01">
                {proofOfInsurance ? proofOfInsurance.name : 'Choose file'}
              </label>
            </div>
        </Form.Group>
        <Form.Group as={Col} className='col-md-4 col-sm-12 col-12'>
            <Form.Label>Driver's License (front)</Form.Label>
            <div className="custom-file" id='custom'>
              <Form.Control
                type="file"
                className="custom-file-input"
                id="inputGroupFile02"
                aria-describedby="inputGroupFileAddon02"
                name='driversLicenseFront'
                onChange={onFileChange}
                accept='image/*'
                isInvalid={driversLicenseFront && !validateFileSize(driversLicenseFront)}
              />
              <FormControl.Feedback type="invalid">
                Image exceeds max size of 10 MB.
              </FormControl.Feedback>
              <label id='file-label-002' className="custom-file-label" htmlFor="inputGroupFile02">
                {driversLicenseFront ? driversLicenseFront.name : 'Choose file'}
              </label>
            </div>
        </Form.Group>
        <Form.Group as={Col} className='col-md-4 col-sm-12 col-12'>
            <Form.Label>Driver's License (back)</Form.Label>
            <div className="custom-file" id='custom'>
              <Form.Control
                type="file"
                className="custom-file-input"
                id="inputGroupFile03"
                aria-describedby="inputGroupFileAddon03"
                name='driversLicenseBack'
                onChange={onFileChange}
                accept='image/*'
                isInvalid={driversLicenseBack && !validateFileSize(driversLicenseBack)}
              />
              <FormControl.Feedback type="invalid">
                Image exceeds max size of 10 MB.
              </FormControl.Feedback>
              <label id='file-label-003' className="custom-file-label" htmlFor="inputGroupFile03">
                {driversLicenseBack ? driversLicenseBack.name : 'Choose file'}
              </label>
            </div>
        </Form.Group>
      </Form.Row>
      <Button
        type="submit"
        disabled={isNotEmpty}
        >
        Submit
      </Button>
    </Form>
  );
}

export default ContractForm;
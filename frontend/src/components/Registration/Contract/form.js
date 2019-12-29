import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import FormInfoTooltip from './info';

import { validatePhone, validateLicense, validateZip, validateFileSize } from 'utils/validation'

import STATES from 'constants/states';

const ContractForm = ({ formData, onChange, onFileChange, onSubmit }) => {
  const { fullName, phone, address, apt, city, state, zip, license,
    proofOfInsurance, driversLicenseFront, driversLicenseBack, filled } = formData;

  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      onSubmit(event);
    }

    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h4>Personal Information</h4>
      <hr />
      <Form.Row>
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            required
            name='fullName'
            value={fullName}
            onChange={onChange}
            placeholder='Full name'
            isValid={!!fullName} />
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
            onChange={onChange}
            placeholder='Phone number'
            isInvalid={phone && !validatePhone(phone) && filled}
          />
          <FormControl.Feedback type="invalid">
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
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
            placeholder='City' />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>State</Form.Label>
          <Form.Control
            required
            name='state'
            value={state}
            onChange={onChange}
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
            onChange={onChange}
            placeholder='Zip code'
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
          <FormInfoTooltip>
            License number found on your driver's license
          </FormInfoTooltip>
          <Form.Control
            required
            name='license'
            value={license}
            onChange={onChange}
            placeholder={'Driver\'s license number'}
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
            <FormInfoTooltip>
              Upload an image, scan, or copy of a document that is proof you
              have car insurance (e.g., an insurance card)
            </FormInfoTooltip>
            <div className="custom-file" id='custom'>
              <Form.Control
                required
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
            <FormInfoTooltip>
              Upload an image, scan, or copy of the front of your valid driver's
              license
            </FormInfoTooltip>
            <div className="custom-file" id='custom'>
              <Form.Control
                required
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
            <FormInfoTooltip>
              Upload an image, scan, or copy of the back of your valid driver's
              license
            </FormInfoTooltip>
            <div className="custom-file" id='custom'>
              <Form.Control
                required
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
      >
        Submit
      </Button>
    </Form>
  );
}

export default ContractForm;
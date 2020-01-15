import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import FormInfoTooltip from './info';

import { validateFileUpload } from 'utils/validation'

const UploadForm = ({ uploadData, onFileChange, onSubmit }) => {
  const { proofOfInsurance, driversLicenseFront, driversLicenseBack } = uploadData;

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
      <h4>Additional Information</h4>
      <hr />
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
                isInvalid={proofOfInsurance && !validateFileUpload(proofOfInsurance)}
              />
              <FormControl.Feedback type="invalid">
                Please upload a .jpg, .jpeg, or .png image that does not exceed 10 MB
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
                isInvalid={driversLicenseFront && !validateFileUpload(driversLicenseFront)}
              />
              <FormControl.Feedback type="invalid">
                Please upload a .jpg, .jpeg, or .png image that does not exceed 10 MB
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
                isInvalid={driversLicenseBack && !validateFileUpload(driversLicenseBack)}
              />
              <FormControl.Feedback type="invalid">
                Please upload a .jpg, .jpeg, or .png image that does not exceed 10 MB
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

export default UploadForm;
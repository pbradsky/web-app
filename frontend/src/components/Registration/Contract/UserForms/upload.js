import React from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import FormInfoTooltip from '../Util/info';

import { isValidFileUpload } from 'utils/validation'

const state = {
  proofOfInsurance: null,
  driversLicenseFront: null,
  driversLicenseBack: null,
};

const UploadForm = ({ state, validated, onChangeForm, onSubmit }) => {
  const { proofOfInsurance, driversLicenseFront, driversLicenseBack } = state;

  return (
    <Form id='form-stage' noValidate onSubmit={onSubmit}>
      <h4>Additional Information</h4>
      <hr />
      <Form.Row>
        <Form.Group as={Col} className='col-md-4 col-sm-12 col-12'>
          <Form.Label>Proof of Insurance</Form.Label>
          <FormInfoTooltip>
            Upload an image, scan, or copy of a document that is proof you
            have car insurance (e.g., an insurance card)
          </FormInfoTooltip>
          <div className='custom-file'>
            <Form.Control
              required
              type='file'
              className='custom-file-input'
              name='proofOfInsurance'
              onChange={onChangeForm}
              accept='image/*'
              isValid={validated && isValidFileUpload(proofOfInsurance)}
              isInvalid={validated && !isValidFileUpload(proofOfInsurance)}
            />
            <FormControl.Feedback type='invalid'>
              Please upload a .jpg, .jpeg, or .png image that does not exceed 10 MB.
            </FormControl.Feedback>
            <label className='custom-file-label'>
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
          <div className='custom-file'>
            <Form.Control
              required
              type='file'
              className='custom-file-input'
              name='driversLicenseFront'
              onChange={onChangeForm}
              accept='image/*'
              isValid={validated && isValidFileUpload(driversLicenseFront)}
              isInvalid={validated && !isValidFileUpload(driversLicenseFront)}
            />
            <FormControl.Feedback type='invalid'>
              Please upload a .jpg, .jpeg, or .png image that does not exceed 10 MB.
            </FormControl.Feedback>
            <label className='custom-file-label'>
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
          <div className='custom-file'>
            <Form.Control
              required
              type='file'
              className='custom-file-input'
              name='driversLicenseBack'
              onChange={onChangeForm}
              accept='image/*'
              isValid={validated && isValidFileUpload(driversLicenseBack)}
              isInvalid={validated && !isValidFileUpload(driversLicenseBack)}
            />
            <FormControl.Feedback type='invalid'>
              Please upload a .jpg, .jpeg, or .png image that does not exceed 10 MB.
            </FormControl.Feedback>
            <label className='custom-file-label'>
              {driversLicenseBack ? driversLicenseBack.name : 'Choose file'}
            </label>
          </div>
        </Form.Group>
      </Form.Row>
    </Form>
  );
}

const UploadFormStage = {
  state,
  Component: UploadForm,
};

export default UploadFormStage;
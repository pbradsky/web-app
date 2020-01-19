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
          <div className="custom-file" id='custom'>
            <Form.Control
              required
              type="file"
              className="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
              name='proofOfInsurance'
              onChange={onChangeForm}
              accept='image/*'
              isValid={validated && isValidFileUpload(proofOfInsurance)}
              isInvalid={validated && !isValidFileUpload(proofOfInsurance)}
            />
            <FormControl.Feedback type="invalid">
              Please upload a .jpg, .jpeg, or .png image that does not exceed 10 MB.
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
              onChange={onChangeForm}
              accept='image/*'
              isValid={validated && isValidFileUpload(driversLicenseFront)}
              isInvalid={validated && !isValidFileUpload(driversLicenseFront)}
            />
            <FormControl.Feedback type="invalid">
              Please upload a .jpg, .jpeg, or .png image that does not exceed 10 MB.
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
              onChange={onChangeForm}
              accept='image/*'
              isValid={validated && isValidFileUpload(driversLicenseBack)}
              isInvalid={validated && !isValidFileUpload(driversLicenseBack)}
            />
            <FormControl.Feedback type="invalid">
              Please upload a .jpg, .jpeg, or .png image that does not exceed 10 MB.
            </FormControl.Feedback>
            <label id='file-label-003' className="custom-file-label" htmlFor="inputGroupFile03">
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
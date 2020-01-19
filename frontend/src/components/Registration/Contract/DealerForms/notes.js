import React from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const state = {
  vin: '',
  notes: '',
};

const NotesForm = ({ state, validated, onChangeForm, onSubmit }) => {
  const { vin, notes } = state;

  return (
    <Form id='form-stage' noValidate onSubmit={onSubmit}>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>VIN</Form.Label>
          <Form.Control
            required
            name='vin'
            value={vin}
            onChange={onChangeForm}
            placeholder='VIN'
            isValid={validated && vin.length > 0}
            isInvalid={validated && vin.length === 0} />
          <FormControl.Feedback type="invalid">
            The VIN field is required.
          </FormControl.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Notes</Form.Label>
          <Form.Control
            name='notes'
            value={notes}
            onChange={onChangeForm}
            placeholder='Notes' />
        </Form.Group>
      </Form.Row>
    </Form>
  );
};

const NotesFormStage = {
  state,
  Component: NotesForm,
}

export default NotesFormStage;
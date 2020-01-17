import React from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const state = {
  vin: '',
  notes: '',
};

const NotesForm = ({ state, onChangeForm }) => {
  const { vin, notes } = state;

  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>VIN</Form.Label>
          <Form.Control
            name='vin'
            value={vin}
            onChange={onChangeForm}
            placeholder='VIN' />
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
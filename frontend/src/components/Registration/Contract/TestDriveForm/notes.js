import React from 'react';

import Form from 'react-bootstrap/Form';

import FormGroup from '../Util/FormGroup';

const state = () => ({
  vin: '',
  notes: '',
});

const NotesForm = ({ state, validated, onChangeForm, onSubmit }) => {
  const { vin, notes } = state;

  return (
    <Form id='form-stage' noValidate onSubmit={onSubmit}>
      <Form.Row>
        <FormGroup
          required
          label='VIN'
          name='vin'
          value={vin}
          onChange={onChangeForm}
          placeholder='VIN'
          validated={validated}
        />
      </Form.Row>
      <Form.Row>
        <FormGroup
          label='Notes'
          name='notes'
          value={notes}
          onChange={onChangeForm}
          placeholder='Notes'
        />
      </Form.Row>
    </Form>
  );
};

const NotesFormStage = {
  state,
  Component: NotesForm,
}

export default NotesFormStage;
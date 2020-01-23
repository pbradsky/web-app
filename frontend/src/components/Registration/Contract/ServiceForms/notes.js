import React from 'react';

import Form from 'react-bootstrap/Form';

import FormGroup from '../Util/FormGroup';

const state = () => ({
  vin: '',
  notes: '',
  out: '',
  due: '',
  plate: '',
  year: '',
  make: '',
  model: '',
  color: '',
  milesAllowed: '',
  mileageOut: '',
  rate: '',
  fuel: '',
});

const NotesForm = ({ state, validated, onChangeForm, onSubmit }) => {
  const { out, due, vin, plate, year, make, model, color, milesAllowed, mileageOut, rate, fuel, notes } = state;

  return (
    <Form id='form-stage' noValidate onSubmit={onSubmit}>
      <Form.Title>Vehicle Information:</Form.Title>
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
      <Form.Row>
        <FormGroup
          required
          label='Date and Time Out:'
          name='out'
          value={out}
          onChange={onChangeForm}
          placeholder='Date and Time Out'
        />
      </Form.Row>
      <Form.Row>
        <FormGroup
          required
          label='Date and Time Due In:'
          name='due'
          value={due}
          onChange={onChangeForm}
          placeholder='Date and Time Due In'
        />
      </Form.Row>
      <Form.Row>
        <FormGroup
          required
          label='License No.:'
          name='plate'
          value={plate}
          onChange={onChangeForm}
          placeholder='Vehicle License Plate'
        />
      </Form.Row>
      <Form.Row>
        <FormGroup
          required
          label='Year:'
          name='year'
          value={year}
          onChange={onChangeForm}
          placeholder='Vehicle Year'
        />
      </Form.Row>
      <Form.Row>
        <FormGroup
          required
          label='Make:'
          name='make'
          value={make}
          onChange={onChangeForm}
          placeholder='Vehicle Make'
        />
      </Form.Row>
      <Form.Row>Model: {model}
        <FormGroup
          required
          label='Model:'
          name='model'
          value={model}
          onChange={onChangeForm}
          placeholder='Vehicle Model'
        />
      </Form.Row>
      <Form.Row>
        <FormGroup
          required
          label='Color:'
          name='color'
          value={color}
          onChange={onChangeForm}
          placeholder='Vehicle Color'
        />
      </Form.Row>
      <Form.Row>
        <FormGroup
          required
          label='Miles Allowed:'
          name='milesAllowed'
          value={milesAllowed}
          onChange={onChangeForm}
          placeholder='Miles Allowed'
        />
      </Form.Row>
      <Form.Row>
        <FormGroup
          required
          label='Mileage Out:'
          name='mileageOut'
          value={mileageOut}
          onChange={onChangeForm}
          placeholder='Mileage Out'
        />
      </Form.Row>
      <Form.Row>
        <FormGroup
          label='Rate per Day (in dollars):'
          name='rate'
          value={rate}
          onChange={onChangeForm}
          placeholder='Rate per Day Out'
        />
      </Form.Row>
      <Form.Row>
        <FormGroup
          label='Fuel:'
          name='fuel'
          value={fuel}
          onChange={onChangeForm}
          placeholder='Fuel'
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
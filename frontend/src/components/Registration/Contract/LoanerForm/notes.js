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
      <Form.Row>
        <FormGroup
          className='col-12 col-md-6'
          required
          label='VIN'
          name='vin'
          value={vin}
          onChange={onChangeForm}
          placeholder='VIN'
          validated={validated}
        />
        <FormGroup
          className='col-12 col-md-6'
          required
          label='License Plate Number:'
          name='plate'
          value={plate}
          onChange={onChangeForm}
          placeholder='Vehicle License Plate'
        />
      </Form.Row>
      <Form.Row>
        <FormGroup
          className='col-6 col-lg-3'
          required
          label='Year:'
          name='year'
          value={year}
          onChange={onChangeForm}
          placeholder='Vehicle Year'
        />
        <FormGroup
          className='col-6 col-lg-3'
          required
          label='Make:'
          name='make'
          value={make}
          onChange={onChangeForm}
          placeholder='Vehicle Make'
        />
        <FormGroup
          className='col-6 col-lg-3'
          required
          label='Model:'
          name='model'
          value={model}
          onChange={onChangeForm}
          placeholder='Vehicle Model'
        />
        <FormGroup
          className='col-6 col-lg-3'
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
          label='Date and Time Out:'
          name='out'
          value={out}
          onChange={onChangeForm}
          placeholder='Date and Time Out'
        />
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
          label='Mileage Out:'
          name='mileageOut'
          value={mileageOut}
          onChange={onChangeForm}
          placeholder='Mileage Out'
        />
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
          className='col-12 col-md-6'
          label='Rate per Day (in dollars):'
          name='rate'
          value={rate}
          onChange={onChangeForm}
          placeholder='Rate per Day Out'
        />
        <FormGroup
          className='col-12 col-md-6'
          label='Fuel Level Out:'
          name='fuel'
          value={fuel}
          onChange={onChangeForm}
          placeholder='Fuel'
        />
      </Form.Row>
      <Form.Row>
        <FormGroup
          label='Additional Notes:'
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
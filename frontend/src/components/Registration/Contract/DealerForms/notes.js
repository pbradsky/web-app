import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NotesForm = ({ notesData, onChange, onSubmit }) => {
  const { vehicle, notes } = notesData;

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className='col-sm-8'>
        <Form.Label>Vehicle</Form.Label>
        <Form.Control
          name='vehicle'
          value={vehicle}
          onChange={onChange}
          placeholder="Vehicle info" />
      </Form.Group>
      <Form.Group className='col-sm-4'>
        <Form.Label>Notes</Form.Label>
        <Form.Control
          name='notes'
          value={notes}
          onChange={onChange}
          placeholder="Additional Information" />
      </Form.Group>
      <Button type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NotesForm;
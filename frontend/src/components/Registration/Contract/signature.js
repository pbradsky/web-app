import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const INITIAL_STATE = {
  signature: '',
  vehicle: '',
  date: '',
};

class SignatureForm extends Component {
  constructor(props) {
    super(props);

    if (props.signatureData.filled) {
      this.state = { ...props.signatureData };
    } else {
      this.state = { ...INITIAL_STATE };
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { signature, vehicle, date } = this.state;

    const isInvalid = [
      signature, vehicle, date
    ].some(field => field === '');

    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Signature</Form.Label>
            <Form.Control
              name='signature'
              value={signature}
              onChange={this.onChange}
              placeholder='Johnny Appleseed' />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Vehicle</Form.Label>
            <Form.Control
              name='vehicle'
              value={vehicle}
              onChange={this.onChange}
              placeholder='Honda Civic' />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Date</Form.Label>
            <Form.Control
              name='date'
              value={date}
              onChange={this.onChange}
              placeholder='11/22/2019' />
          </Form.Group>
        </Form.Row>
        <Button
          variant='primary'
          onClick={this.props.onSubmit(this.state)}
          disabled={isInvalid}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default SignatureForm;
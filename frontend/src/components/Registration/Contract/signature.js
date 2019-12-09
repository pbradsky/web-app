import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import getTodaysDate from 'utils/date';

const INITIAL_STATE = {
  signature: '',
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
    const { signature, date } = this.state;
    const { name } = this.props;

    const isInvalid = [
      signature, date
    ].some(field => field === '');

    return (
      <Form>
        <Form.Row>
          <Form.Group className='col-sm-8'>
            <Form.Label>Signature</Form.Label>
            <Form.Control
              name='signature'
              value={signature}
              onChange={this.onChange}
              placeholder={name} />
          </Form.Group>
          <Form.Group className='col-sm-4'>
            <Form.Label>Date</Form.Label>
            <Form.Control
              name='date'
              value={date}
              onChange={this.onChange}
              placeholder={getTodaysDate()} />
          </Form.Group>
        </Form.Row>
        <Button
          onClick={this.props.onSubmit(this.state)}
          disabled={isInvalid}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default SignatureForm;
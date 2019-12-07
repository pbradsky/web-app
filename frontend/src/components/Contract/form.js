import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import STATES from '../../constants/states';

const INITIAL_STATE = {
  name: '',
  phone: '',
  address: '',
  apt: '',
  city: '',
  state: '',
  zip: '',
  license: '',
};

class ContractForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { name, phone, address, apt, city, state, zip, license } = this.state;

    const isInvalid = [
      name, phone, address, city, state, zip, license
    ].some(field => field === '');

    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              name='name'
              value={name}
              onChange={this.onChange}
              placeholder='Johnny Appleseed' />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              name='phone'
              value={phone}
              onChange={this.onChange}
              placeholder='555-333-4444' />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Address</Form.Label>
            <Form.Control
              name='address'
              value={address}
              onChange={this.onChange}
              placeholder='1234 Main St' />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              name='apt'
              value={apt}
              onChange={this.onChange}
              placeholder='Apartment, studio, or floor' />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control
              name='city'
              value={city}
              onChange={this.onChange}
              placeholder='New York City' />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>State</Form.Label>
            <Form.Control
              name='state'
              value={state}
              onChange={this.onChange}
              as='select'>
              <option disabled>Choose a state...</option>
              {Object.keys(STATES).map((state, index) => (
                <option key={index} value={STATES[state]}>{state}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Zip</Form.Label>
            <Form.Control
              name='zip'
              value={zip}
              onChange={this.onChange}
              placeholder='11235' />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>License Number</Form.Label>
          <Form.Control
              name='license'
              value={license}
              onChange={this.onChange} />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Proof of Insurance</Form.Label>
            <Form.Control type='file' />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Picture of Driver's License (front)</Form.Label>
            <Form.Control type='file' />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Picture of Driver's License (back)</Form.Label>
            <Form.Control type='file' />
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

export default ContractForm;
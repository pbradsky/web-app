import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from '../../styled/Container';

import * as ROUTES from '../../constants/routes';
import * as CONTRACT from '../../constants/contractText';
import STATES from '../../constants/states';

const INITIAL_FORM_STATE = {
  name: '',
  phone: '',
  address: '',
  apt: '',
  city: '',
  state: '',
  zip: '',
  license: '',
};

const INITIAL_CONTRACT_STATE = {
  name: '',
  phone: '',
  fullAddress: '',
  license: '',
}

class ContractForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_FORM_STATE };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { name, phone, address, apt, city, state, zip, license } = this.state;

    const isInvalid = name === '';

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

class ContractPage extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_CONTRACT_STATE };
  }

  onSubmit = userInfo => event => {
    const { name, phone, address, apt, city, state, zip, license } = userInfo;

    const streetAddress = apt ? `${address}, ${apt}` : address;
    const fullAddress = `${streetAddress}, ${city}, ${state} ${zip}`;

    this.setState({
      name,
      phone,
      fullAddress,
      license,
    });

    event.preventDefault();
  };

  render() {
    const { name, phone, fullAddress, license } = this.state;

    return (
      <Container>
        <Card>
          <Card.Header as='h4' className='p-auto'>Contract</Card.Header>
          <Card.Body className='m-auto' style={{whiteSpace: 'pre-line'}}>
            <ContractForm onSubmit={this.onSubmit} />
            <br />
            <Card.Text>
              {CONTRACT.PREAMBLE}
            </Card.Text>
            <Card.Text>
              {CONTRACT.CONTRACT_FORM(name, fullAddress, phone, license)}
            </Card.Text>
            <Card.Text>
              {CONTRACT.SIGNATURE}
            </Card.Text>
            <Form>
              {CONTRACT.SIGNATURE_FORM}
            </Form>
            <Link to={ROUTES.HOLDING}>Done!</Link>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default ContractPage;
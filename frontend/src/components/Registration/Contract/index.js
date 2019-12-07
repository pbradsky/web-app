import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Container from 'styled/Container';
import ContractForm from './form';
import SignatureForm from './signature';

import * as CONTRACT from 'constants/contractText';
import * as ROUTES from 'constants/routes';

const INITIAL_STATE = {
  name: '',
  phone: '',
  fullAddress: '',
  license: '',
  signature: '',
  vehicle: '',
  date: '',
};

class ContractPage extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onFormSubmit = userInfo => event => {
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

  onSignatureSubmit = userInfo => event => {
    const { signature, vehicle, date } = userInfo;

    this.setState({
      signature,
      vehicle,
      date
    });

    this.props.history.push(ROUTES.CONFIRMATION);
    event.preventDefault();
  }

  render() {
    const { name, phone, fullAddress, license } = this.state;

    return (
      <Container>
        <Card>
          <Card.Header as='h4'>Contract</Card.Header>
          <Card.Body style={{whiteSpace: 'pre-line'}}>
            <ContractForm onSubmit={this.onFormSubmit} />
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
            <Card.Text>
              {CONTRACT.SIGNATURE_FORM}
            </Card.Text>
            <SignatureForm onSubmit={this.onSignatureSubmit} />
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default withRouter(ContractPage);
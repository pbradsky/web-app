import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'styled/Container';
import ContractForm from './form';
import SignatureForm from './signature';
import ProgressBar from 'react-bootstrap/ProgressBar';

import * as CONTRACT from 'constants/contractText';
import * as ROUTES from 'constants/routes';

const stages = {
  FORM: 0,
  SIGNATURE: 1,
  DONE: 2,
};
const NUM_STAGES = Object.keys(stages).length;

const INITIAL_STATE = {
  name: '',
  phone: '',
  fullAddress: '',
  license: '',
  signature: '',
  vehicle: '',
  date: '',
  stage: stages.FORM,
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
      stage: stages.SIGNATURE,
    });

    event.preventDefault();
  };

  onSignatureSubmit = userInfo => event => {
    const { signature, vehicle, date } = userInfo;

    this.setState({
      signature,
      vehicle,
      date,
      stage: stages.DONE,
    });

    this.props.history.push(ROUTES.CONFIRMATION);
    event.preventDefault();
  }

  onChangeState = delta => event => {
    const { stage } = this.state;

    let newStage = stage + delta;
    if (newStage < 0) {
      newStage = 0;
    } else if (newStage >= NUM_STAGES) {
      newStage = NUM_STAGES - 1;
    }

    this.setState({
      stage: newStage,
    });
  }

  render() {
    const { name, phone, fullAddress, license, stage } = this.state;

    const progress = (stage + 1) / NUM_STAGES * 100;
    const progressText = `${stage + 1} / ${NUM_STAGES}`;

    let stageContent = null;
    switch (stage) {
      case stages.FORM:
        stageContent = (
          <ContractForm onSubmit={this.onFormSubmit} />
        );
        break;
      case stages.SIGNATURE:
        stageContent = (
          <>
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
          </>
        );
        break;
      default:
        break;
    }

    return (
      <Container>
        <Card>
          <Card.Header as='h4'>
            Contract
            <ProgressBar now={progress} label={progressText} />
            <Button
              disabled={stage <= 0}
              onClick={this.onChangeState(-1)}>
                Back
            </Button>
            <Button
              disabled={stage >= NUM_STAGES - 1}
              onClick={this.onChangeState(1)}>
                Forward
            </Button>
          </Card.Header>
          <Card.Body style={{whiteSpace: 'pre-line'}}>
            {stageContent}
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default withRouter(ContractPage);
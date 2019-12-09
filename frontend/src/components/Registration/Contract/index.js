import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'styled/Container';
import ContractForm from './form';
import SignatureForm from './signature';
import ProgressBar from 'react-bootstrap/ProgressBar';

import { withFirebase } from 'api/Firebase';
import * as CONTRACT from 'constants/contractText';
import * as ROUTES from 'constants/routes';
import formatAddress from 'utils/address';

const stages = {
  FORM: 0,
  SIGNATURE: 1,
  DONE: 2,
};
const NUM_STAGES = Object.keys(stages).length;

const INITIAL_STATE = {
  formData: {
    name: '',
    phone: '',
    address: '',
    apt: '',
    city: '',
    state: '',
    zip: '',
    license: '',
    filled: false,
  },
  signatureData: {
    signature: '',
    vehicle: '',
    date: '',
    filled: false,
  },
  stage: stages.FORM,
  maxStage: stages.FORM,
};

class ContractPage extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onFormSubmit = userInfo => event => {
    this.setState({
      formData: {
        ...userInfo,
        filled: true,
      },
      stage: stages.SIGNATURE,
      maxStage: stages.SIGNATURE,
    });

    event.preventDefault();
  };

  componentWillUnmount() {
    if (this.listener) {
      this.listener();
    }
  }

  onSignatureSubmit = userInfo => event => {
    event.preventDefault();

    const { formData } = this.state;
    const contract = {
      signature: userInfo.signature,
      vehicle: userInfo.vehicle,
      date: userInfo.date,
    };
    this.listener = this.props.firebase.onAuthUserListener(
      authUser => {
        this.props.firebase
          .user(authUser.uid)
          .set({
            ...authUser,
            fullName: formData.name,
            phone: formData.phone,
            address: formData.address,
            apt: formData.apt,
            city: formData.city,
            state: formData.state,
            zip: formData.zip,
            license: formData.license,
            contract,
          })
          .then(() => {
            this.setState({
              signatureData: {
                ...userInfo,
                filled: true,
              },
              stage: stages.DONE,
              maxStage: stages.DONE,
            });
            this.props.history.push(ROUTES.CONFIRMATION);
          })
          .catch(error => {
            console.log(error);
            this.setState({
              stage: stages.SIGNATURE,
              maxStage: stages.SIGNATURE
            });
          });
      },
      () => this.props.history.push(ROUTES.SIGN_IN)
    );
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
    event.preventDefault();
  }

  render() {
    const { formData, signatureData, stage, maxStage } = this.state;
    const { name, phone, license } = formData;

    const progress = (stage + 1) / NUM_STAGES * 100;
    const progressText = `${stage + 1} / ${NUM_STAGES}`;
    const fullAddress = formatAddress(formData);

    let stageContent = null;
    switch (stage) {
      case stages.FORM:
        stageContent = (
          <ContractForm onSubmit={this.onFormSubmit} formData={formData} />
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
            <SignatureForm
              onSubmit={this.onSignatureSubmit}
              signatureData={signatureData} />
          </>
        );
        break;
      default:
        break;
    }

    return (
      <Container>
        <Card>
          <Card.Header style={{color: '#27A745'}} as='h3'>
            Contract
            <hr />
            <ProgressBar variant='success' now={progress} label={progressText} />
            <br />
            <Button
              variant='success'
              className='mr-2'
              disabled={stage <= 0}
              onClick={this.onChangeState(-1)}>
                Back
            </Button>
            <Button
              variant='success'
              className='ml-2'
              disabled={stage >= maxStage}
              onClick={this.onChangeState(1)}>
                Forward
            </Button>
          </Card.Header>
          <Card.Body style={{whiteSpace: 'pre-line'}}>
            {stageContent}
          </Card.Body>
          <Card.Footer>
            <br />
            <Button
              variant='success'
              className='mr-2'
              disabled={stage <= 0}
              onClick={this.onChangeState(-1)}>
                Back
            </Button>
            <Button
              variant='success'
              className='ml-2'
              disabled={stage >= maxStage}
              onClick={this.onChangeState(1)}>
                Forward
            </Button>
          </Card.Footer>
        </Card>
      </Container>
    );
  }
}

export default compose(
  withRouter,
  withFirebase
)(ContractPage);
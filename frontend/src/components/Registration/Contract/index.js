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
import { validateSignature } from 'utils/validation';

const stages = {
  FORM: 0,
  SIGNATURE: 1,
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
    date: '',
    filled: false,
  },
  oneShot: false,
  stage: stages.FORM,
  maxStage: stages.FORM,
  errors: [],
};

class ContractPage extends Component {
  constructor(props) {
    super(props);

    if (props.location.pathname === ROUTES.CONTRACT_ONESHOT) {
      INITIAL_STATE.oneShot = true;
    }
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

  componentDidMount() {
    const { oneShot } = this.state;

    if (oneShot) {
      this.props.firebase
        .doSignInAnonymously()
        .then(authUser => {
          return this.props.firebase
            .user(authUser.user.uid)
            .set({
              uid: authUser.user.uid,
              isAnon: authUser.user.isAnonymous,
            });
        })
    }
  }

  componentWillUnmount() {
    if (this.listener) {
      this.listener();
    }
  }

  onSignatureSubmit = userInfo => event => {
    event.preventDefault();

    const errors = validateSignature(userInfo.date);
    this.setState({ errors });
    if (errors.length > 0) {
      return;
    }

    const { formData } = this.state;
    const contract = {
      signature: userInfo.signature,
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
              }
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
    const { formData, signatureData, stage, maxStage, errors } = this.state;
    const { name, phone, license } = formData;

    const progress = (stage + 1) / NUM_STAGES * 100;
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
            <h4>Dealer's Permit for Demonstration</h4>
            <Card style={{overflowY: 'scroll', height: '50vh'}}>
              <Card.Body>
                <Card.Text>
                  {CONTRACT.CONTRACT_FORM(name, fullAddress, phone, license)}
                </Card.Text>
                <Card.Text>
                  {CONTRACT.SIGNATURE_FORM}
                </Card.Text>
                <Card.Text>
                  {CONTRACT.SIGNATURE}
                </Card.Text>
                <Card.Text>
                  {CONTRACT.PREAMBLE}
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <SignatureForm
              onSubmit={this.onSignatureSubmit}
              signatureData={signatureData}
              name={name}
              errors={errors} />
          </>
        );
        break;
      default:
        break;
    }

    return (
      <Container>
        <Card>
          <Card.Header as='h3'>
            Contract
            <hr />
            <ProgressBar now={progress} />
            <br />
            <Button
              className='mr-2'
              disabled={stage <= 0}
              onClick={this.onChangeState(-1)}>
                Back
            </Button>
            <Button
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
              className='mr-2'
              disabled={stage <= 0}
              onClick={this.onChangeState(-1)}>
                Back
            </Button>
            <Button
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
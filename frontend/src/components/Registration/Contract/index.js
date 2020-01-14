import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ContractForm from './form';
import SignatureForm from './signature';
import { PreambleText, ContractFormText } from './text';

import { withFirebase } from 'api/Firebase';
import withUser from 'api/Session/withUser';
import * as CONDITIONS from 'constants/conditions';
import * as ROUTES from 'constants/routes';
import formatAddress from 'utils/address';
import { validateSignature, validateForm } from 'utils/validation';
import { sanitizeFormData } from 'utils/sanitize';

const stages = {
  FORM: 0,
  SIGNATURE: 1,
};
const NUM_STAGES = Object.keys(stages).length;

const INITIAL_STATE = {
  formData: {
    fullName: '',
    phone: '',
    address: '',
    apt: '',
    city: '',
    state: '',
    zip: '',
    license: '',
    proofOfInsurance: null,
    driversLicenseFront: null,
    driversLicenseBack: null,
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
    if (CONDITIONS.isUser(this.props.authUser) && this.props.authUser.contract) {
      const {
        fullName, phone, address, apt, city, state, zip, license
      } = this.props.authUser;
      this.state = {
        ...INITIAL_STATE,
        formData: {
          fullName, phone, address, apt, city, state, zip, license,
          filled: true,
        },
        maxStage: stages.SIGNATURE,
      };
    }
  }

  componentDidMount() {
    const { oneShot } = this.state;

    if (oneShot && !CONDITIONS.isUser(this.props.authUser)) {
      this.props.firebase
        .doSignInAnonymously()
        .then(authUser => {
          return this.props.firebase
            .user(authUser.user.uid)
            .set({
              uid: authUser.user.uid,
              isAnon: authUser.user.isAnonymous,
              username: 'Anonymous User',
              email: 'none',
            });
        })
    }
  }

  onFormChange = event => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  onFileChange = event => {
    const file = event.target.files[0];
    const { formData } = this.state;
    formData[event.target.name] = file;
    this.setState({ formData });
  }

  onSignatureChange = event => {
    const { signatureData } = this.state;
    signatureData[event.target.name] = event.target.value;
    this.setState({ signatureData });
  };

  onFormSubmit = event => {
    const { formData } = this.state;
    const isValid = validateForm(formData)
    formData.filled = true;
    this.setState({
      formData: formData
    });
    if (isValid) {
      this.setState({
        formData,
        stage: stages.SIGNATURE,
        maxStage: stages.SIGNATURE,
      });
    }

    event.preventDefault();
  };

  onSignatureSubmit = event => {
    const { signature, date } = this.state.signatureData;
    const fullName = this.state.formData.fullName;
    event.preventDefault();

    const errors = validateSignature(signature, fullName, date);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }

    const rawFormData = {...this.state.formData};
    const contract = { signature, date };
    delete rawFormData.filled;
    delete rawFormData.proofOfInsurance;
    delete rawFormData.driversLicenseFront;
    delete rawFormData.driversLicenseBack;

    const formData = sanitizeFormData(rawFormData);
    if (this.props.authUser) {
      this.props.firebase
        .user(this.props.authUser.uid)
        .set({
          ...this.props.authUser,
          ...formData,
          contract,
        })
      this.upload(this.state.formData.proofOfInsurance, '-proof_of_insurance')
      this.upload(this.state.formData.driversLicenseFront, '-drivers_license_front')
      this.upload(this.state.formData.driversLicenseBack, '-drivers_license_back')
      this.props.history.push(ROUTES.CONFIRMATION);
    } else {
      this.props.history.push(ROUTES.SIGN_IN)
    }
  }

  onChangeState = delta => event => {
    const { stage } = this.state;

    let newStage = stage + delta;
    if (newStage < 0) {
      this.props.history.push(ROUTES.CHOOSE_DEALER);
    } else if (newStage >= NUM_STAGES) {
      newStage = NUM_STAGES - 1;
    }

    this.setState({
      stage: newStage,
    });
    event.preventDefault();
  }

  upload = (file, type) => {
    const storageRef = this.props.firebase.storage.ref();
    storageRef.child('images/' + this.props.authUser.uid + type).put(file);
  }

  render() {
    const { formData, signatureData, stage, maxStage, errors } = this.state;
    const { fullName, phone, license } = formData;

    const progress = (stage + 1) / NUM_STAGES * 100;
    const fullAddress = formatAddress(formData);

    const ContractNav = (
      <>
        <Button
          className='mr-2'
          onClick={this.onChangeState(-1)}>
            Back
        </Button>
        {stage >= NUM_STAGES - 1
          ? <Button
              className='ml-2'
              onClick={this.onSignatureSubmit}>
                Finish
            </Button>
          : <Button
              className='ml-2'
              disabled={stage >= maxStage}
              onClick={this.onChangeState(1)}>
                Forward
            </Button>}
      </>
    );

    let stageContent = null;
    switch (stage) {
      case stages.FORM:
        stageContent = (
          <ContractForm
            formData={formData}
            onChange={this.onFormChange}
            onFileChange={this.onFileChange}
            onSubmit={this.onFormSubmit} />
        );
        break;
      case stages.SIGNATURE:
        stageContent = (
          <>
            <h4>Dealer's Permit for Demonstration</h4>
            <Card style={{overflowY: 'scroll', height: '50vh'}}>
              <Card.Body>
                <ContractFormText name={fullName} address={fullAddress} phone={phone} license={license} />
                <PreambleText />
              </Card.Body>
            </Card>
            <br />
            <SignatureForm
              signatureData={signatureData}
              name='Your Name Here'
              errors={errors}
              onChange={this.onSignatureChange} />
          </>
        );
        break;
      default:
        break;
    }

    return (
      <Container>
        <Card className='mt-4 mb-4'>
          <Card.Header>
            <ProgressBar now={progress} />
          </Card.Header>
          <Card.Body style={{whiteSpace: 'pre-line'}}>
            {stageContent}
          </Card.Body>
          <Card.Footer>
            {ContractNav}
          </Card.Footer>
        </Card>
      </Container>
    );
  }
}

export default compose(
  withUser,
  withRouter,
  withFirebase
)(ContractPage);
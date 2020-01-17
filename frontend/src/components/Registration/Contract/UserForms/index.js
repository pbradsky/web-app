import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ContractForm from './form';
import UploadForm from './upload';

import { withFirebase } from 'api/Firebase';
import { withUser } from 'api/Session';
import * as CONDITIONS from 'constants/conditions';
import * as ROUTES from 'constants/routes';
import { validateForm, validateUpload } from 'utils/validation';
import { sanitizeFormData } from 'utils/sanitize';

const stages = {
  FORM: 0,
  UPLOAD: 1,
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
    filled: false,
  },
  uploadData: {
    proofOfInsurance: null,
    driversLicenseFront: null,
    driversLicenseBack: null,
    filled: false,
  },
  oneShot: false,
  stage: stages.FORM,
  maxStage: stages.FORM,
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
        uploadData: { ...INITIAL_STATE.uploadData },
        maxStage: stages.FORM + 1,
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
    const { uploadData } = this.state;
    uploadData[event.target.name] = file;
    this.setState({ uploadData });
  }

  onFormSubmit = event => {
    const { formData } = this.state;
    const isValid = validateForm(formData);
    formData.filled = true;
    if (isValid) {
      this.setState({
        formData,
        stage: stages.FORM + 1,
        maxStage: stages.FORM + 1,
      });
    } else {
      this.setState({ formData });
    }

    event.preventDefault();
  };

  onUploadSubmit = () => {
    const { uploadData } = this.state;
    const isValid = validateUpload(uploadData);
    uploadData.filled = true;
    if (!isValid) {
      this.setState({ uploadData });
      return;
    }

    this.setState({
      uploadData,
      stage: stages.UPLOAD + 1,
      maxStage: stages.UPLOAD + 1,
    });

    this.onUserContractSubmit();
  }

  onUserContractSubmit = () => {
    const {
      proofOfInsurance, driversLicenseFront, driversLicenseBack
    } = this.state.uploadData;
    const formData = sanitizeFormData(this.state.formData);

    if (this.props.authUser) {
      this.props.firebase
        .user(this.props.authUser.uid)
        .set({
          ...this.props.authUser,
          ...formData,
        });
      this.upload(proofOfInsurance, 'proof_of_insurance')
      this.upload(driversLicenseFront, 'drivers_license_front')
      this.upload(driversLicenseBack, 'drivers_license_back')
      this.setState({ ...INITIAL_STATE });
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
    storageRef.child(`images/${this.props.authUser.uid}/` + type).put(file);
  }

  render() {
    const {
      formData, uploadData, stage, maxStage
    } = this.state;

    const progress = (stage + 1) / NUM_STAGES * 100;

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
            onSubmit={this.onFormSubmit} />
        );
        break;
      case stages.UPLOAD:
        stageContent = (
          <UploadForm
            uploadData={uploadData}
            onFileChange={this.onFileChange}
            onSubmit={this.onUploadSubmit} />
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
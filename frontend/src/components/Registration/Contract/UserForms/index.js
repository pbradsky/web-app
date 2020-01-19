import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import ContractFormStage from './form';
import UploadFormStage from './upload';
import MultiStageForm from '../MultiStageForm';

import { withFirebase } from 'api/Firebase';
import { withUser } from 'api/Session';
import * as ROUTES from 'constants/routes';
import { sanitizeFormData } from 'utils/sanitize';

/*
constructor:
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
      },
      uploadData: { ...INITIAL_STATE.uploadData },
    };
  }

  componentDidMount:
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

  missing:
    => oneshot functionality
    => required form validation
*/

const UserContractPage = ({ authUser, firebase, history }) => {
  const forms = [
    {
      ...ContractFormStage,
      state: ContractFormStage.state(authUser),
    },
    { ...UploadFormStage },
  ];

  const upload = (file, type) => {
    const storageRef = firebase.storage.ref();
    storageRef.child(`images/${authUser.uid}/` + type).put(file);
  }

  const onSubmit = forms => {
    const formData = sanitizeFormData(forms[0].state);
    const {
      proofOfInsurance, driversLicenseFront, driversLicenseBack
    } = forms[1].state;

    if (!authUser) {
      history.push(ROUTES.SIGN_IN);
      return;
    }

    firebase
      .user(authUser.uid)
      .set({
        ...authUser,
        ...formData,
      });
    upload(proofOfInsurance, 'proof_of_insurance')
    upload(driversLicenseFront, 'drivers_license_front')
    upload(driversLicenseBack, 'drivers_license_back')
    history.push(ROUTES.CONFIRMATION);
  }

  return (
    <MultiStageForm
      title='User Details Form'
      forms={forms}
      onSubmit={onSubmit} />
  );
};

export default compose(
  withUser,
  withRouter,
  withFirebase
)(UserContractPage);
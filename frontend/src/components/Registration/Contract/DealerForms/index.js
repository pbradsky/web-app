import React from 'react';
import { withRouter } from 'react-router-dom';

import NotesFormStage from './notes';
import MultiStageForm from '../MultiStageForm';
import SignatureFormStage from './signature';

import * as ROUTES from 'constants/routes';

const forms = [
  { ...NotesFormStage },
  { ...SignatureFormStage },
];

const FinalizeContractPage = ({ history }) => {
  const onSubmit = forms => {
    const { vin, notes } = forms[0].state;
    const { signature, date } = forms[1].state;

    // TODO(tim): add db publish
    console.log({
      dbData: {
        vehicleInfo: {
          vin,
          notes
        },
        contract: {
          signature,
          date
        },
      }
    });

    // TODO(tim): update route
    history.push(ROUTES.LANDING);
  }

  return (
    <MultiStageForm
      title='Finalize User Contract'
      forms={forms}
      onSubmit={onSubmit} />
  );
};

export default withRouter(FinalizeContractPage);

/*
  onSignatureSubmit = () => {
    const { signature, date } = this.state.signatureData;
    const fullName = this.state.formData.fullName;

    const {
      proofOfInsurance, driversLicenseFront, driversLicenseBack
    } = this.state.uploadData;
    const rawFormData = { ...this.state.formData };
    const contract = { signature, date };
    delete rawFormData.filled;

    const formData = sanitizeFormData(rawFormData);
    if (this.props.authUser) {
      this.props.firebase
        .user(this.props.authUser.uid)
        .set({
          ...this.props.authUser,
          ...formData,
          contract,
        })
      this.upload(proofOfInsurance, 'proof_of_insurance')
      this.upload(driversLicenseFront, 'drivers_license_front')
      this.upload(driversLicenseBack, 'drivers_license_back')
      this.setState({ ...INITIAL_STATE });
      this.props.history.push(ROUTES.CONFIRMATION);
    } else {
      this.props.history.push(ROUTES.SIGN_IN)
    }
  }
*/
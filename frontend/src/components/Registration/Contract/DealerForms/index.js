import React from 'react';

import NotesFormStage from './notes';
import MultiStageForm from '../MultiStageForm';
import SignatureFormStage from './signature';

const forms = [
  { ...NotesFormStage },
  { ...SignatureFormStage },
];

const onSubmit = forms => {
  const { vin, notes } = forms[0].state;
  const { signature, date } = forms[1].state;

  // TODO(tim): add validation/errors

  console.log(vin, notes, signature, date);
  // TODO(tim): add db publish and routing

  return
}

const Header = () => (
  <h1>Finalize User Contract</h1>
);

const FinalizeContractPage = () => (
  <MultiStageForm
    Header={Header}
    forms={forms}
    onSubmit={onSubmit} />
);

export default FinalizeContractPage;

/*
  onSignatureSubmit = () => {
    const { signature, date } = this.state.signatureData;
    const fullName = this.state.formData.fullName;

    const errors = validateSignature(signature, fullName, date);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }

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
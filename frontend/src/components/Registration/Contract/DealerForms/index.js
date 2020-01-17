import React from 'react';

import NotesFormStage from './notes';
import MultiStageForm from '../MultiStageForm';
import SignatureFormStage from './signature';

const Two = () => <h1>Stage TWO</h1>;

const forms = [
  { ...NotesFormStage },
  { ...SignatureFormStage },
];

const FinalizeContractPage = () => (
  <MultiStageForm forms={forms} />
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
*/
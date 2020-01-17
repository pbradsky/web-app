import React from 'react';

import MultiStageForm from '../MultiStageForm';

const One = () => <h1>Stage ONE</h1>;
const Two = () => <h1>Stage TWO</h1>;

const forms = [
  {
    state: {},
    Component: One,
  },
  {
    state: {},
    Component: Two,
  }
];

const FinalizeContractPage = () => (
  <MultiStageForm forms={forms} />
);

export default FinalizeContractPage;

/*

  signatureData: {
    signature: '',
    date: '',
    filled: false,
  },


  signatureData: { ...INITIAL_STATE.signatureData },


  onSignatureChange = event => {
    const { signatureData } = this.state;
    signatureData[event.target.name] = event.target.value;
    this.setState({ signatureData });
  };



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
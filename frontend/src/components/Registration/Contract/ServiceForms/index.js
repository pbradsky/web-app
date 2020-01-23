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

const FinaleContractPage = ({ history }) => {
  const onSubmit = forms => {
    const { out, due, vin, plate, year, make, model,
            color, milesAllowed, mileageOut, rate, fuel, notes} = forms[0].state;
    const { signature, date } = forms[1].state;

    // TODO(tim): add db publish
    console.log({
      dbData: {
        vehicleInfo: {
          out, due, vin,
          plate, year, make,
          model, color, milesAllowed,
          mileageOut, rate, fuel,
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

export default withRouter(FinaleContractPage);

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import VehicleInfoFormStage from './vehicleInfo';
import MultiStageForm from '../Util/MultiStageForm';
import SignatureFormStage from './signature';
import { WithPageLoad } from 'components/Util/Loading';

import { withFirebase } from 'api/Firebase';
import { withAuthorization } from 'api/Session';

import * as CONDITIONS from 'constants/conditions';
import * as ROUTES from 'constants/routes';

const forms = [
  { ...VehicleInfoFormStage },
  { ...SignatureFormStage },
];

class LoanerFormPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      loading: false,
    };
  }

  componentDidMount() {
    const { match, history } = this.props;

    this.setState({ loading: true });
    this.props.firebase.user(match.params.id)
      .once('value')
      .then(snapshot => {
        const user = snapshot.val();
        if (!user) {
          history.push(ROUTES.NOT_FOUND);
        }

        this.setState({
          user: user,
          loading: false
        });
      });
  }

  onSubmit = forms => {
    const { history } = this.props;
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

  render() {
    const { loading, user } = this.state;

    return (
      <WithPageLoad loading={loading}>
        {user &&
          <MultiStageForm
            title={`Loaner Contract for ${user.username}`}
            forms={forms}
            onSubmit={this.onSubmit}
            user={user} />}
      </WithPageLoad>
    );
  }
};

export default compose(
  withAuthorization(CONDITIONS.isSignedInService),
  withRouter,
  withFirebase
)(LoanerFormPage);

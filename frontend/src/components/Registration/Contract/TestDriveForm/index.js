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

class TestDriveFormPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.user(this.props.match.params.id)
      .once('value')
      .then(snapshot => {
        const user = snapshot.val();
        this.setState({
          user: user,
          loading: false
        });
      });
  }

  onSubmit = forms => {
    const { history } = this.props;
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

  render() {
    const { loading, user } = this.state;

    return (
      <WithPageLoad loading={loading}>
        {user &&
          <MultiStageForm
            title={`Test Drive Contract for ${user.username}`}
            forms={forms}
            onSubmit={this.onSubmit}
            user={user} />}
      </WithPageLoad>
    );
  }
};

export default compose(
  withAuthorization(CONDITIONS.isSignedInDealer),
  withRouter,
  withFirebase
)(TestDriveFormPage);

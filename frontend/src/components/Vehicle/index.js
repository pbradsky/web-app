import React, { Component } from 'react';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';
import * as CONDITIONS from '../../constants/conditions';
import * as ROUTES from '../../constants/routes';

class DriveVehiclePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      vehicle: {},
      status: null
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.vehicle(this.props.match.params.id)
      .once('value')
      .then(snapshot => {
        const vehicle = snapshot.val();

        this.setState({
          loading: false,
          vehicle: vehicle
        });
      });
  }

  handleUpdateStatus = status => {
    this.setState({ status });
    setTimeout(() => {
      this.setState({
        status: null
      });
    }, 1500);
  }

  handleLock = vid => {
    axios.post(process.env.REACT_APP_SERVER + '/control', {
      lock: true,
      id: vid
    })
    .then(res => {
      this.handleUpdateStatus('Lock ' + res.data.status);
    })
    .catch(err => console.log(err));
  }

  handleUnlock = vid => {
    axios.post(process.env.REACT_APP_SERVER + '/control', {
      lock: false,
      id: vid
    })
    .then(res => {
      this.handleUpdateStatus('Unlock ' + res.data.status);
    })
    .catch(err => console.log(err));
  }

  render() {
    const { loading, vehicle, status } = this.state;

    return (
      <div>
        <h1>Your Vehicle</h1>

        {loading && <div>Loading</div>}

        {Object.keys(vehicle).length !== 0
          ? <div>
              <h2>{vehicle.year} {vehicle.make} {vehicle.model}</h2>
              <p>Vehicle ID: {vehicle.id}</p>
              <br />
              <button onClick={() => this.handleLock(vehicle.id)}>Lock</button>
              <button onClick={() => this.handleUnlock(vehicle.id)}>Unlock</button>
              <br />
              <p>{status}</p>
            </div>
          : null}
      </div>
    );
  }
}

const VehicleItem = ({ vehicle }) => (
  <div>
    <h2>{vehicle.year} {vehicle.make} {vehicle.model}</h2>
    <p>Vehicle ID: {vehicle.id}</p>
    <Link to={ROUTES.DRIVE + `/${vehicle.id}`}>
      Start Drive
    </Link>
  </div>
);

export default compose(
  withAuthorization(CONDITIONS.isSignedInApprovedUser),
  withFirebase
)(DriveVehiclePage);

export { VehicleItem };

import React, { Component } from 'react';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';
import { VehicleItem } from '../Vehicle';
import * as CONDITIONS from '../../constants/conditions';

class DrivePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      vehicles: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.vehicles().on('value', snapshot => {
      const vehiclesObject = snapshot.val();

      const vehiclesList = Object.keys(vehiclesObject).map(key => ({
        ...vehiclesObject[key],
        id: key
      }));

      this.setState({
        loading: false,
        vehicles: vehiclesList
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.vehicles().off();
  }

  render() {
    const { loading, vehicles } = this.state;

    return (
      <div>
        <h1>Our Fleet!</h1>

        {loading && <div>Loading...</div>}

        <VehicleList vehicles={vehicles} />
      </div>
    );
  }
}


const VehicleList = ({ vehicles }) => (
  <div>
    {vehicles.map(vehicle => (
      <VehicleItem key={vehicle.id} vehicle={vehicle} />
    ))}
  </div>
);

export default compose(
  withAuthorization(CONDITIONS.isSignedInApprovedUser),
  withFirebase
)(DrivePage);

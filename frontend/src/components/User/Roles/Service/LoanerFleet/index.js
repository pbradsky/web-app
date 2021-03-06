import React, { Component } from 'react';
import { compose } from 'recompose';
import Fuse from 'fuse.js';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import LoanerList from './list';
import { WithPageLoad } from 'components/Util/Loading';
import Search from 'components/Util/Search';

import { withAuthorization, withUser } from 'api/Session';
import { withFirebase } from 'api/Firebase';
import { vehicleSearchOptions } from 'utils/search';

import * as CONDITIONS from 'constants/conditions';

// This is part of the Service Dept. Suite
// 1. Vehicles can be added/removed from the list.
// 2. Fleet can be managed from here, Available/Out.
// 3. Look and feel of our dashboard. Badges offer a quick look for vehicle status.
// 4. Accordion gives more details about the car.
// 5. Search on this page looks for vehicles by Make, Model, VIN, status.
// 6. This page updates the dropdown menu and autofill on Loaner Form.
// Vehicle should have VIN, Make, Model, Year, Color, License, Status, Mileage
class LoanerFleetPage extends Component {
  constructor(props) {
    super(props);

    const vehicles = [
      {
        vin: '123VIN456ABC',
        make: 'Honda',
        model: 'Civic',
        year: '2002',
        color: 'gray',
        license: 'L1C3N53',
        status: 'Available'
      }
    ];

    this.state = {
      fuse: new Fuse(vehicles, vehicleSearchOptions),
      vehicles: vehicles,
      loading: false,
      searchQuery: '',
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    const dealerId = this.props.authUser.dealership;

    this.props.firebase.vehicles(dealerId).on('value', snapshot => {
      const vehiclesObject = snapshot.val();

      const vehiclesList = vehiclesObject
        ? Object.keys(vehiclesObject).map(key => ({
            ...vehiclesObject[key],
            vin: key
          }))
        : [];

      this.setState({
        fuse: new Fuse(vehiclesList, vehicleSearchOptions),
        vehicles: vehiclesList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    const dealerId = this.props.authUser.dealership;
    this.props.firebase.vehicles(dealerId).off();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { loading, vehicles, searchQuery, fuse } = this.state;

    const searchedVehicles = searchQuery
      ? fuse.search(searchQuery)
      : vehicles;

    return (
      <Container>
        <WithPageLoad loading={loading}>
          <Jumbotron>
            <h1>Loaner Fleet Dashboard</h1>
          </Jumbotron>
          <Search searchQuery={searchQuery} onChange={this.onChange} />
          <br />
          <LoanerList vehicles={searchedVehicles} />
        </WithPageLoad>
      </Container>
    );
  }
}

export default compose(
  withAuthorization(CONDITIONS.isSignedInService),
  withUser,
  withFirebase
)(LoanerFleetPage);
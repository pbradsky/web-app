import React, { Component } from 'react';
import { compose } from 'recompose';
import Fuse from 'fuse.js';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import LoanerList from './list';
import { WithPageLoad } from 'components/Util/Loading';
import Search from 'components/Util/Search';

import { withAuthorization } from 'api/Session';
import { withFirebase } from 'api/Firebase';
import { vehicleSearchOptions } from 'utils/search';

import * as CONDITIONS from 'constants/conditions';
import * as ROLES from 'constants/roles';

// This is part of the Service Dept. Suite
// 1. Vehicles can be added/removed from the list.
// 2. Fleet can be managed from here, Available/Out.
// 3. Look and feel of our dashboard. Badges offer a quick look for vehicle status.
// 4. Accordion gives more details about the car.
// 5. Search on this page looks for vehicles by Make, Model, VIN, status.
// 6. This page updates the dropdown menu and autofill on Loaner Form.
// Vehicle sshould have VIN, Make, Model, Year, Color, License, Status, Mileage
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
        status: 'available'
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
    // this.setState({ loading: true });

    // this.props.firebase.users().on('value', snapshot => {
    //   const usersObject = snapshot.val();

    //   const usersList = Object.keys(usersObject).map(key => ({
    //     ...usersObject[key],
    //     uid: key
    //   })).filter(CONDITIONS.isDealerViewable);

    //   this.setState({
    //     fuse: new Fuse(usersList, userSearchOptions),
    //     users: usersList,
    //     loading: false,
    //   });
    // });
  }

  componentWillUnmount() {
    // this.props.firebase.users().off();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addLoaner = () => {
    // TODO(tim): add form to get loaner vehicle information and add to db
    //     using a modal/popup?
    console.log('add loaner vehicle');
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
          <div>
            Loaner Fleet
            {/* TODO(tim): add loaner fleet list component */}
          </div>
          <Button onClick={this.addLoaner}>New</Button>
          <Search searchQuery={searchQuery} onChange={this.onChange} />
          <br />
          <LoanerList vehicles={searchedVehicles} />
        </WithPageLoad>
      </Container>
    );
  }
}

export default LoanerFleetPage;
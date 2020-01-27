// Main dashboard page for service department to see customers.
// Search for customers manually to finalize application.
// See if a customer currently has a vehicle out.
// Be able to change a customer/vehicle status to returned & complete a close form.
// Close form checks a car back in and user to regular state.
// Search function here can serach by if a user has a car checked out in addition to all other criteria.

import React, { Component } from 'react';
import { compose } from 'recompose';
import Fuse from 'fuse.js';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import UserList from 'components/User/UserList';
import { WithPageLoad } from 'components/Util/Loading';
import Search from 'components/Util/Search';

import { withAuthorization } from 'api/Session';
import { withFirebase } from 'api/Firebase';
import { userSearchOptions } from 'utils/search';

import * as CONDITIONS from 'constants/conditions';
import * as ROLES from 'constants/roles';

class ServicePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fuse: new Fuse([], userSearchOptions),
      users: [],
      loading: false,
      searchQuery: '',
    };
  }

  // componentDidMount() {
  //   this.setState({ loading: true });

  //   this.props.firebase.users().on('value', snapshot => {
  //     const usersObject = snapshot.val();

  //     const usersList = Object.keys(usersObject).map(key => ({
  //       ...usersObject[key],
  //       uid: key
  //     })).filter(CONDITIONS.isDealerViewable);

  //     this.setState({
  //       fuse: new Fuse(usersList, userSearchOptions),
  //       users: usersList,
  //       loading: false,
  //     });
  //   });
  // }

  // componentWillUnmount() {
  //   this.props.firebase.users().off();
  // }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addLoaner = () => {
    // TODO(tim): add form to get loaner vehicle information and add to db
    //     using a modal/popup?
    console.log('add loaner vehicle');
  }

  render() {
    const { loading, users, searchQuery, fuse } = this.state;

    const searchedUsers = searchQuery
      ? fuse.search(searchQuery)
      : users;

    return (
      <Container>
        <WithPageLoad loading={loading}>
          <Jumbotron>
            <h1>Service Partner Dashboard</h1>
            <p>This page is only accessible to our Dealership Service partners.</p>
          </Jumbotron>
          <div>
            {/* TODO(tim): add loaner fleet list component */}
          </div>
          <Search searchQuery={searchQuery} onChange={this.onChange} />
          <br />
          <UserList
            users={searchedUsers}
            role={ROLES.SERVICE}
            storage={this.props.firebase.storage.ref()} />
            {/* UsersList should have for each known user of this dealership a
            button that will allow the finalize process to begin right next to the other buttons in dropdown. */}
        </WithPageLoad>
      </Container>
    );
  }
}

export default compose(
  withAuthorization(CONDITIONS.isSignedInService),
  withFirebase
)(ServicePage);

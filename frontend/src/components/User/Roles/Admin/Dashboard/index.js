import React, { Component } from 'react';
import { compose } from 'recompose';
import Fuse from 'fuse.js';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import UserList from './node_modules/components/User/UserList';
import { WithPageLoad } from './node_modules/components/Util/Loading';
import Search from './node_modules/components/Util/Search';

import { withAuthorization } from './node_modules/api/Session';
import { withFirebase } from './node_modules/api/Firebase';
import { userSearchOptions } from './node_modules/utils/search';

import * as CONDITIONS from './node_modules/constants/conditions';
import * as ROLES from './node_modules/constants/roles';

class DealerPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fuse: new Fuse([], userSearchOptions),
      users: [],
      loading: false,
      searchQuery: '',
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key
      })).filter(CONDITIONS.isDealerViewable);

      this.setState({
        fuse: new Fuse(usersList, userSearchOptions),
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
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
            <h1>Dealer Dashboard</h1>
            <p>This page is only accessible to our Dealership partners.</p>
          </Jumbotron>
          <Search searchQuery={searchQuery} onChange={this.onChange} />
          <br />
          <UserList
            users={searchedUsers}
            role={ROLES.DEALER}
            storage={this.props.firebase.storage.ref()} />
        </WithPageLoad>
      </Container>
    );
  }
}

export default compose(
  withAuthorization(CONDITIONS.isSignedInDealer),
  withFirebase
)(DealerPage);

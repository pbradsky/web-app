import React, { Component } from 'react';
import { compose } from 'recompose';
import Fuse from 'fuse.js';

import UserList from 'components/User/UserList';
import { WithPageLoad } from 'components/Util/Loading';
import Search from 'components/Util/Search';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import { withFirebase } from 'api/Firebase';
import { withAuthorization } from 'api/Session';
import { userSearchOptions } from 'utils/search';

import * as CONDITIONS from 'constants/conditions';
import * as ROLES from 'constants/roles';

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fuse: new Fuse([], userSearchOptions),
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
      }));

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
            <h3>Admin Dashboard</h3>
            <p>
              This page is only accessible to signed in admins.
            </p>
          </Jumbotron>
          <Search searchQuery={searchQuery} onChange={this.onChange} />
          <br />
          <UserList
            users={searchedUsers}
            role={ROLES.ADMIN}
            storage={this.props.firebase.storage.ref()} />
        </WithPageLoad>
      </Container>
    );
  }
}

export default compose(
  withAuthorization(CONDITIONS.isSignedInAdmin),
  withFirebase
)(AdminPage);

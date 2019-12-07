import React, { Component } from 'react';
import { compose } from 'recompose';

import UserList from 'components/User/UserList';
import Loading from 'components/Util/Loading';
import Search from 'components/Util/Search';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'styled/Container';

import { withFirebase } from 'api/Firebase';
import { withAuthorization } from 'api/Session';
import * as CONDITIONS from 'constants/conditions';

class DevPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: []
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
        users: usersList,
        loading: false,
        searchQuery: ''
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  usernameFilter = query => user => {
    return user.username.toLowerCase().includes(query.toLowerCase());
  }

  render() {
    const { loading, users, searchQuery } = this.state;

    const searchedUsers = users.filter(this.usernameFilter(searchQuery)).sort();

    return (
      <Container>
        <Jumbotron>
          <h3>Dev Page</h3>
          <p className='body-secondary'>
            This page is only accessible to signed in dev users.
          </p>
        </Jumbotron>
        <Loading loading={loading} />
        <Search searchQuery={searchQuery} onChange={this.onChange} />
        <br />
        <UserList users={searchedUsers} isDev={true} />
      </Container>
    );
  }
}

export default compose(
  withAuthorization(CONDITIONS.isSignedInDev),
  withFirebase
)(DevPage);

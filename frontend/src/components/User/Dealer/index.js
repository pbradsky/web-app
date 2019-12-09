import React, { Component } from 'react';
import { compose } from 'recompose';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'styled/Container';
import UserList from 'components/User/UserList';
import Loading from 'components/Util/Loading';
import Search from 'components/Util/Search';

import jumboimage from 'assets/jumbo.jpg';

import { withAuthorization } from 'api/Session';
import { withFirebase } from 'api/Firebase';
import * as CONDITIONS from 'constants/conditions';

class DealerPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      }));

      this.setState({
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

  usernameFilter = query => user => {
    return user.username.toLowerCase().includes(query.toLowerCase());
  }

  render() {
    const { loading, users, searchQuery } = this.state;

    const searchedUsers = users.filter(this.usernameFilter(searchQuery)).sort();

    return (
      <Container>
        <Jumbotron style={{ backgroundImage: `url(${jumboimage})`, backgroundSize: 'cover' }}>
          <h1 style={{color: 'white'}}>Dealer Dashboard</h1>
          <p style={{color: 'white'}}>This page is only accessible to our Dealership partners.</p>
          <hr className='col-6' style={{float: 'left', borderColor: 'white'}} />
          <br /><br />
        </Jumbotron>
        <Loading loading={loading} />
        <Search searchQuery={searchQuery} onChange={this.onChange} />
        <br />
        <UserList users={searchedUsers} />
      </Container>
    );
  }
}

export default compose(
  withAuthorization(CONDITIONS.isSignedInDealer),
  withFirebase
)(DealerPage);

import React, { Component } from 'react';
import { compose } from 'recompose';

import { Jumbotron, Accordion, Card, Badge, Spinner } from 'react-bootstrap';
import Container from '../../styled/Container';

import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';
import * as CONDITIONS from '../../constants/conditions';

class AdminPage extends Component {
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
          <h3>Admin Page</h3>
          <p className='body-secondary'>
            This page is only accessible to signed in admin users.
          </p>
        </Jumbotron>
        {loading &&
            <Spinner animation='border' role='status' style={{display: 'block', margin: 'auto'}}>
              <span className='sr-only'>Loading...</span>
            </Spinner>
        }
        <input
          className='p-1'
          style={{ width: '30rem' }}
          name='searchQuery'
          value={searchQuery}
          onChange={this.onChange}
          type='text'
          placeholder='search'
        />
        <UserList users={searchedUsers} />
        <br />
      </Container>
    );
  }
}

const UserList = ({ users }) => (
  <Accordion>
    {users.map(user => (
      <Card key={user.uid}>
        <Accordion.Toggle
          as={Card.Header}
          eventKey={user.uid}
          style={{textDecoration: 'none', color: 'inherit'}}>
          {user.username}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={user.uid}>
          <Card.Body>
            <Card.Text>
              Email: {user.email}
            </Card.Text>
            <hr />
            <Card.Text>
              ID: {user.uid}
            </Card.Text>
            {user.roles && Object.keys(user.roles).map((role, index) =>
              <Badge
                key={index}
                variant='primary'
                className='m-1 p-2'>{role}</Badge>
            )}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    ))}
  </Accordion>
);

export default compose(
  withAuthorization(CONDITIONS.isSignedInAdmin),
  withFirebase
)(AdminPage);

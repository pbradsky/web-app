import React, { Component } from 'react';
import { compose } from 'recompose';

import { Button, Container, Jumbotron, Accordion, Card, Badge, Spinner } from 'react-bootstrap';

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
        loading: false
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { loading, users } = this.state;

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
        <UserList users={users} />
        <br />
      </Container>
    );
  }
}

const UserList = ({ users }) => (
  <Accordion>
    {users.map(user => (
      <Card key={user.uid}>
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey={user.uid}
            style={{textDecoration: 'none', color: 'inherit'}}>
              {user.username}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={user.uid}>
          <Card.Body>
            <Card.Text>
              <strong>Email:</strong> {user.email}
            </Card.Text>
            <hr />
            <Card.Text>
              <strong>ID:</strong> {user.uid}
            </Card.Text>
            <hr />
            {user.roles && Object.keys(user.roles).map( (role, index) =>
              <Badge key={index} variant='primary' className='m-1 p-2'>{role}</Badge>
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

import React, { Component } from 'react';
import { compose } from 'recompose';

import { Container, Jumbotron, CardColumns, Card, Badge } from 'react-bootstrap';

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
      <div>
        {loading && <div>Loading...</div>}
        <Jumbotron>
          <h3>Admin Page</h3>
          <p className='body-secondary'>
            This page is only accessible to signed in admin users.
          </p>
        </Jumbotron>

        <Container>
            <UserList users={users} />
          <br />
        </Container>
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <CardColumns>
    {users.map(user => (
      <Card key={user.uid}>
        <Card.Header as='h4'>{user.username}</Card.Header>
        <Card.Body>
          <Card.Text>
            <strong>Email:</strong> {user.email}
          </Card.Text>
          <hr />
          <Card.Text>
            <strong>ID:</strong> {user.uid}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='text-muted'>
          {user.roles && Object.keys(user.roles).map( (role, index) => <Badge key={index} variant='primary' className='m-1 p-2'>{role}</Badge>)}
        </Card.Footer>
      </Card>
    ))}
  </CardColumns>
);

export default compose(
  withAuthorization(CONDITIONS.isSignedInAdmin),
  withFirebase
)(AdminPage);

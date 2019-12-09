import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Container from 'styled/Container';

import { withAuthorization } from 'api/Session';
import * as CONDITIONS from 'constants/conditions';
import * as ROLES from 'constants/roles';
import * as ROUTES from 'constants/routes';

class UserDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      user: null,
    }
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.user(this.props.match.params.id)
      .once('value')
      .then(snapshot => {
        const user = snapshot.val();

        this.setState({
          loading: false,
          user,
        });
      });
  }

  onToggleRole = role => () => {
    const { user } = this.state;

    const roles = {
      ...user.roles,
    };

    if (roles[role]) {
      delete roles[role];
    } else {
      roles[role] = role;
    }

    user.roles = roles;
    this.setState({ user });
    this.props.firebase
      .user(user.uid)
      .set({
        ...user,
      })
      .then(() => console.log(`Updated role '${role}'!`))
      .catch(error => console.log(error));
  }

  render() {
    const { user, loading } = this.state;

    return (
      <Container>
        {loading && <div>Loading...</div>}
        {user &&
          <>
            <Jumbotron>
              <h1>User Details</h1>
              {user.email}
            </Jumbotron>
            <Row>
              <Card.Text>{user.username}</Card.Text>
              <Card.Text>isAdmin: {CONDITIONS.isSignedInAdmin(user) ? 'YES' : 'NO'}</Card.Text>
              <Card.Text>isDealer: {CONDITIONS.isSignedInDealer(user) ? 'YES' : 'NO'}</Card.Text>
              <Button onClick={this.onToggleRole(ROLES.ADMIN)}>
                Toggle Admin Role
              </Button>
              <Button onClick={this.onToggleRole(ROLES.DEALER)}>
                Toggle Dealer Role
              </Button>
            </Row>
          </>
        }
      </Container>
    );
  }
}

const UserDetailsLink = ({ isAdmin, uid }) => (
  isAdmin
    ? <Link to={ROUTES.USER_DETAILS + `/${uid}`}>
        <Button>User Details Page</Button>
      </Link>
    : null
);

export { UserDetailsLink };
export default withAuthorization(CONDITIONS.isSignedInAdmin)(UserDetailsPage);
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'styled/Container';
import PrintContractButton from 'components/Registration/Contract/print';
import { WithPageLoad } from 'components/Util/Loading';

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
        roles,
      })
      .then(() => console.log(`Updated role '${role}'!`))
      .catch(error => console.log(error));
  }

  render() {
    const { user, loading } = this.state;

    return (
      <Container>
        <WithPageLoad loading={loading}>
          {user &&
            <>
              <Jumbotron>
                <h1>User Details</h1>
                {user.email}
              </Jumbotron>
              <Card>
                <Card.Body>
                  <Card.Title>{user.username}</Card.Title>
                  <hr />
                  <Card.Text>Admin Permissions: {CONDITIONS.isSignedInAdmin(user) ? 'Yes' : 'No'}</Card.Text>
                  <Button className='mb-2' onClick={this.onToggleRole(ROLES.ADMIN)}>
                    Toggle Admin
                  </Button>
                  <hr />
                  <Card.Text>Dealer Permissions: {CONDITIONS.isSignedInDealer(user) ? 'Yes' : 'No'}</Card.Text>
                  <Button className='mb-2' onClick={this.onToggleRole(ROLES.DEALER)}>
                    Toggle Dealer
                  </Button>
                  <PrintContractButton user={user} />
                </Card.Body>
              </Card>
            </>}
        </WithPageLoad>
      </Container>
    );
  }
}

const UserDetailsLink = ({ isAdmin, uid }) => (
  isAdmin
    ? <Link className='m-2' to={ROUTES.USER_DETAILS + `/${uid}`}>
        <Button size='sm'>Edit User</Button>
      </Link>
    : null
);

export { UserDetailsLink };
export default withAuthorization(CONDITIONS.isSignedInAdmin)(UserDetailsPage);
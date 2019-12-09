import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Container from 'styled/Container';

import { withAuthorization } from 'api/Session';
import * as CONDITIONS from 'constants/conditions';
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
            </Row>
          </>
        }
      </Container>
    );
  }
}

const UserDetailsLink = ({ isDev, uid }) => (
  isDev
    ? <Link to={ROUTES.USER_DETAILS + `/${uid}`}>
        <Button>User Details Page</Button>
      </Link>
    : null
);

export { UserDetailsLink };
export default withAuthorization(CONDITIONS.isSignedInDev)(UserDetailsPage);
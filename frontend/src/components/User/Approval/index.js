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

class ApprovalPage extends Component {
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

  onToggleApproval = () => {
    const { user } = this.state;

    const roles = {
      ...user.roles,
    };

    if (roles[ROLES.APPROVED]) {
      delete roles[ROLES.APPROVED];
    } else {
      roles[ROLES.APPROVED] = ROLES.APPROVED;
    }

    user.roles = roles;
    this.setState({ user });
    this.props.firebase
      .user(user.uid)
      .set({
        ...user,
      })
      .then(() => console.log('updated approval!'))
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
              <h1>User Approval</h1>
              {user.email}
            </Jumbotron>
            <Row>
              <Card.Text>{user.username}</Card.Text>
              <Card.Text>isApproved: {CONDITIONS.isSignedInApprovedUser(user) ? 'YES' : 'NO'}</Card.Text>
              <Button onClick={this.onToggleApproval}>
                Toggle Approval
              </Button>
            </Row>
          </>
        }
      </Container>
    );
  }
}

const ApprovalLink = ({ isDev, uid }) => (
  isDev
    ? <Link to={ROUTES.APPROVAL + `/${uid}`}>
        <Button>Approval Page</Button>
      </Link>
    : null
);

export { ApprovalLink };
export default withAuthorization(CONDITIONS.isSignedInDev)(ApprovalPage);
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Container from 'styled/Container';

import { withAuthorization } from 'api/Session';
import * as CONDITIONS from 'constants/conditions';
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
              {user.username}
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
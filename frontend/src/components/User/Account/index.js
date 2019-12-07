import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from '../../../styled/Container';

import { withAuthorization, AuthUserContext } from '../../Session';
import PasswordChangeCard from '../../PasswordChange';
import DeleteAccountCard from '../../DeleteAccount';

import * as CONDITIONS from '../../../constants/conditions';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Container>
        <Jumbotron>
          <h1>Account Page</h1>
          {authUser.email}
        </Jumbotron>
        <Row>
            <Col md>
              <PasswordChangeCard />
            </Col>
            <Col md>
              <DeleteAccountCard />
            </Col>
        </Row>
      </Container>
    )}
  </AuthUserContext.Consumer>
);

export default withAuthorization(CONDITIONS.isSignedInUser)(AccountPage);
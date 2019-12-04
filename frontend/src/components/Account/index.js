import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from '../../styled/Container';

import { withAuthorization, AuthUserContext } from '../Session';
import PasswordChangeCard from '../PasswordChange';
import DeleteAccountCard from '../DeleteAccount';

import * as CONDITIONS from '../../constants/conditions';
import Card from 'react-bootstrap';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Container>
      <Jumbotron>
        <h2>Account Page</h2>
        {authUser.email}
      </Jumbotron>
          <PasswordChangeCard />
          <DeleteAccountCard />
      </Container>
    )}
  </AuthUserContext.Consumer>
);

export default withAuthorization(CONDITIONS.isSignedInUser)(AccountPage);
import React from 'react';

import { Jumbotron } from 'react-bootstrap';
import Container from '../../styled/Container';

import { withAuthorization, AuthUserContext } from '../Session';
import PasswordChangeCard from '../PasswordChange';
import DeleteAccountCard from '../DeleteAccount';

import * as CONDITIONS from '../../constants/conditions';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
      <Jumbotron>
        <h2>Account Page</h2>
        {authUser.email}
      </Jumbotron>
      <Container>
        <br />
        <PasswordChangeCard />
        <DeleteAccountCard />
      </Container>
      </div>
    )}
  </AuthUserContext.Consumer>
);

export default withAuthorization(CONDITIONS.isSignedInUser)(AccountPage);
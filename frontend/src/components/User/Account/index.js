import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container';

import PasswordChangeCard from '../PasswordChange';
import DeleteAccountCard from '../DeleteAccount';

import { withAuthorization, AuthUserContext } from 'api/Session';
import * as CONDITIONS from 'constants/conditions';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Container>
        <Jumbotron>
          <h1>Account Settings</h1>
          <p>{authUser.email}</p>
          <hr />
        </Jumbotron>
        <CardGroup className='mb-4'>
              <PasswordChangeCard />
              <DeleteAccountCard />
        </CardGroup>
      </Container>
    )}
  </AuthUserContext.Consumer>
);

export default withAuthorization(CONDITIONS.isSignedInKnownUser)(AccountPage);
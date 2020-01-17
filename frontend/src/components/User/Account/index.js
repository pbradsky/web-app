import React from 'react';
import { compose } from 'recompose';

import Jumbotron from 'react-bootstrap/Jumbotron';
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container';

import PasswordChangeCard from '../PasswordChange';
import DeleteAccountCard from '../DeleteAccount';

import { withAuthorization, withUser } from 'api/Session';
import * as CONDITIONS from 'constants/conditions';

const AccountPage = ({ authUser }) => (
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
);

export default compose(
  withUser,
  withAuthorization(CONDITIONS.isSignedInKnownUser)
)(AccountPage);
import React from 'react';

import { CardDeck, Jumbotron, Card, Container } from 'react-bootstrap';

import { withAuthorization, AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

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
        <CardDeck>
          <br />
          <Card>
            <Card.Header as='h4' className='p-auto'>Password Reset</Card.Header>
            <Card.Body className='m-auto'>
              <PasswordForgetForm />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header as='h4' className='p-auto'>Password Change</Card.Header>
            <Card.Body className='m-auto'>
              <PasswordChangeForm />
            </Card.Body>
          </Card>

        </CardDeck>
      </Container>
      </div>
    )}
  </AuthUserContext.Consumer>
);

export default withAuthorization(CONDITIONS.isSignedInUser)(AccountPage);
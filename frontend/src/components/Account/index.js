import React from 'react';

import { Jumbotron, Card } from 'react-bootstrap';
import Container from '../../styled/Container';

import { withAuthorization, AuthUserContext } from '../Session';
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
        <br />
        <Card style={{width: '36rem'}}>
          <Card.Header as='h4' className='p-auto'>Password Change</Card.Header>
          <Card.Body className='m-auto'>
            <PasswordChangeForm />
          </Card.Body>
        </Card>
      </Container>
      </div>
    )}
  </AuthUserContext.Consumer>
);

export default withAuthorization(CONDITIONS.isSignedInUser)(AccountPage);
import React from 'react';

import Card from 'react-bootstrap/Card';
import Container from '../../styled/Container';

import { withAuthorization } from '../Session';
import * as CONDITIONS from '../../constants/conditions';

const HoldingPage = () => (
  <Container>
    <Card>
      <Card.Header as='h4' className='p-auto'>Holding</Card.Header>
      <Card.Body className='m-auto'>
        <p>
          Please wait while your account is approved.
          This process can take a few business days.
          <br />
          <br />
          Thank you for your patience!
        </p>
      </Card.Body>
    </Card>
  </Container>
);

export default withAuthorization(CONDITIONS.isSignedInUser)(HoldingPage);
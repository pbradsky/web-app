import React from 'react';

import Card from 'react-bootstrap/Card';
import Container from '../../styled/Container';

import { withAuthorization } from '../Session';
import * as CONDITIONS from '../../constants/conditions';

const ConfirmationPage = () => (
  <Container>
    <Card>
      <Card.Header>Confirmation</Card.Header>
      <Card.Body>
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

export default withAuthorization(CONDITIONS.isSignedInUser)(ConfirmationPage);
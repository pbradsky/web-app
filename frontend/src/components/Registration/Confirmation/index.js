import React from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'styled/Container';

import { withAuthorization } from 'api/Session';
import * as CONDITIONS from 'constants/conditions';

const ConfirmationPage = () => (
  <Container>
    <Card>
      <Card.Header>Confirmation</Card.Header>
      <Card.Body>
        <Card.Title>All done!</Card.Title>
        <Card.Text>
          Your information has been submitted.
          Thank you for choosing Jurne, we hope you enjoy the ride!
        </Card.Text>
      </Card.Body>
    </Card>
  </Container>
);

export default withAuthorization(CONDITIONS.isSignedInUser)(ConfirmationPage);
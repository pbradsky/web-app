import React from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'styled/Container';

import { withAuthorization } from 'api/Session';
import * as CONDITIONS from 'constants/conditions';

const ConfirmationPage = () => (
  <Container>
    <Card>
      <Card.Body>
      <Card.Title style={{color: '#27A745'}}>All done!</Card.Title>
        <hr />
        <Card.Text>
          Thank you for letting us be a part of your process!
        </Card.Text>
        <Card.Text>
          Your information has been submitted.
        </Card.Text>

      </Card.Body>
    </Card>
  </Container>
);

export default withAuthorization(CONDITIONS.isSignedInUser)(ConfirmationPage);
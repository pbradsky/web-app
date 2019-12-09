import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'styled/Container';

import { withAuthorization } from 'api/Session';
import * as CONDITIONS from 'constants/conditions';
import * as ROUTES from 'constants/routes';

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
        <Link to={ROUTES.CONTRACT}>
          <Button>Edit Contract</Button>
        </Link>
      </Card.Body>
    </Card>
  </Container>
);

export default withAuthorization(CONDITIONS.isSignedInUser)(ConfirmationPage);
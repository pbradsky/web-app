import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import { withAuthorization } from 'api/Session';
import * as CONDITIONS from 'constants/conditions';
import * as ROUTES from 'constants/routes';

const ConfirmationPage = () => (
  <Container>
    <Card className='mt-4'>
      <Card.Body>
        <Card.Title>All done!</Card.Title>
        <hr />
        <Card.Text>
          Your information has been processed.
        </Card.Text>
        <Card.Text>
          If you would like to resubmit the form, press the button below.
        </Card.Text>
        <Link to={ROUTES.CONTRACT}>
          <Button>Edit Contract</Button>
        </Link>
      </Card.Body>
    </Card>
  </Container>
);

export default withAuthorization(CONDITIONS.isUser)(ConfirmationPage);
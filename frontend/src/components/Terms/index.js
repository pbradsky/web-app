import React from 'react';

import { Card } from 'react-bootstrap';
import Container from '../../styled/Container';

const TermsPage = () => (
  <Container>
    <Card>
      <Card.Header as='h4' className='p-auto'>Terms</Card.Header>
      <Card.Body className='m-auto'>
        <p>Here are our terms.</p>
      </Card.Body>
    </Card>
  </Container>
);

export default TermsPage;
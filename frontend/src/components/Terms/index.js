import React from 'react';

import Card from 'react-bootstrap/Card';
import Container from '../../styled/Container';

const TermsPage = () => (
  <Container>
    <Card>
      <Card.Header>Terms</Card.Header>
      <Card.Body>
        <Card.Text>Here are our terms.</Card.Text>
      </Card.Body>
    </Card>
  </Container>
);

export default TermsPage;
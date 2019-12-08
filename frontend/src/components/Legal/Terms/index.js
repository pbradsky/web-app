import React from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'styled/Container';

const TermsPage = () => (
  <Container>
    <Card>
      <Card.Body>
        <Card.Title style={{color: '#27A745'}}>Contact Us</Card.Title>
        <hr />
        <Card.Text>Here are our terms of service.</Card.Text>
      </Card.Body>
    </Card>
  </Container>
);

export default TermsPage;
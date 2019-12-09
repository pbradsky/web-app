import React from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'styled/Container';

const PrivacyPage = () => (
  <Container>
    <Card>
      <Card.Body>
        <Card.Title>Privacy Policy</Card.Title>
        <hr />
        <Card.Text>Here is our privacy policy.</Card.Text>
      </Card.Body>
    </Card>
  </Container>
);

export default PrivacyPage;
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const NotFound = () => (
  <Container>
    <Card className='mt-4'>
      <Card.Body>
        <Card.Title as='h4'>404 Error: Page not found...</Card.Title>
        <Card.Text>(Sorry about that...)</Card.Text>
      </Card.Body>
    </Card>
  </Container>
);

export default NotFound;
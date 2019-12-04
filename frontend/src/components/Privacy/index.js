import React from 'react';

import { Card } from 'react-bootstrap';
import Container from '../../styled/Container';

const PrivacyPage = () => (
  <Container>
    <Card>
      <Card.Header as='h4' className='p-auto'>Privacy</Card.Header>
      <Card.Body className='m-auto'>
        <p>Here are our privacy.</p>
      </Card.Body>
    </Card>
  </Container>
);

export default PrivacyPage;
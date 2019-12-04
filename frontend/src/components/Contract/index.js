import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from 'react-bootstrap';
import Container from '../../styled/Container';

import * as ROUTES from '../../constants/routes';

const ContractPage = () => (
  <Container>
    <Card>
      <Card.Header as='h4' className='p-auto'>Contract</Card.Header>
      <Card.Body className='m-auto'>
        <Link to={ROUTES.HOLDING}>Done!</Link>
      </Card.Body>
    </Card>
  </Container>
);

export default ContractPage;
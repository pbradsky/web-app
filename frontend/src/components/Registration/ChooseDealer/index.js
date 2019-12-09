import React from 'react';
import { Link } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'styled/Container';
import Card from 'react-bootstrap/Card';

import dealers from 'constants/dealers';
import * as ROUTES from 'constants/routes';

const ChooseDealerPage = () => (
  <Container>
    <Jumbotron>
      <h1>Dealership Select</h1>
    </Jumbotron>
    <DealerList dealers={Object.values(dealers)} />
  </Container>
);

const DealerList = ({ dealers }) => (
  dealers.map((dealer, index) => (
    <Link to={ROUTES.CONTRACT} key={index} style={{textDecoration: 'none'}}>
      <Card bg='primary' text='white'>
        <Card.Body>
          <Card.Title className='m-2'>{dealer}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  ))
);

export default ChooseDealerPage;

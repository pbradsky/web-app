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
      <h1>Choose a Dealership</h1>
      <p>On this page.</p>
    </Jumbotron>
    <DealerList dealers={Object.values(dealers)} />
  </Container>
);

const DealerList = ({ dealers }) => (
  dealers.map((dealer, index) => (
    <Link to={ROUTES.CONTRACT} key={index}>
      <Card>
        <Card.Body>
          <Card.Title>{dealer}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  ))
);

export default ChooseDealerPage;

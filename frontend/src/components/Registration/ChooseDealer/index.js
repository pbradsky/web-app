import React from 'react';
import { Link } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'styled/Container';
import Card from 'react-bootstrap/Card';

import jumboimage from 'assets/jumbo.jpg';

import dealers from 'constants/dealers';
import * as ROUTES from 'constants/routes';

const ChooseDealerPage = () => (
  <Container>
    <Jumbotron style={{ backgroundImage: `url(${jumboimage})`, backgroundSize: 'cover' }}>
      <h1 style={{color: 'white'}}>Choose a Dealership</h1>
      <p style={{color: 'white'}}>On this page.</p>
      <hr className='col-6' style={{float: 'left', borderColor: 'white'}} />
      <br /><br />
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

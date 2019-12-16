import React from 'react';
import { Link } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'styled/Container';
import Card from 'react-bootstrap/Card';

import { AuthUserContext } from 'api/Session';
import dealers from 'constants/dealers';
import * as CONDITIONS from 'constants/conditions';
import * as ROUTES from 'constants/routes';

const ChooseDealerPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Container>
        <Jumbotron>
          <h1>Dealership Select</h1>
        </Jumbotron>
        <DealerList
          dealers={Object.values(dealers)}
          isComplete={CONDITIONS.isSignedInCompleteUser(authUser)} />
      </Container>)}
  </AuthUserContext.Consumer>
);

const DealerList = ({ dealers, isComplete }) => {
  const route = isComplete ? ROUTES.CONFIRMATION : ROUTES.CONTRACT;

  return (
    dealers.map((dealer, index) => (
      <Link to={route} key={index} style={{textDecoration: 'none'}}>
        <Card bg='primary' text='white'>
          <Card.Body>
            <Card.Title className='m-2'>{dealer}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    ))
  );
}

export default ChooseDealerPage;

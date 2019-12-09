import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'styled/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import * as ROUTES from 'constants/routes';

const Landing = () => (
  <Container>
    <Jumbotron>
      <h1>Your drive starts here</h1>
      <p>Time is precious. Why waste it at a desk?</p>
      <hr />
      <Link to={ROUTES.SIGN_UP}><Button>JOIN NOW</Button></Link>
    </Jumbotron>
    <CardDeck>
      <Card>
        <Card.Body>
          <Card.Title>Reach out</Card.Title>
          <hr />
          <Card.Text>
            If you have feedback,
            click the button below to get in touch.
          </Card.Text>
          <Card.Text>
            We're here to listen.
          </Card.Text>
          <Link to={ROUTES.CONTACT}><Button variant='outline-primary'>Contact Us</Button></Link>
        </Card.Body>
      </Card>
    </CardDeck>
  </Container>
);

export default Landing;
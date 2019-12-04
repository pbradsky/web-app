import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Container from '../../styled/Container';
import CardDeck from 'react-bootstrap/CardDeck';

const Landing = () => (
  <Container>
    <Jumbotron>
      <h1>Welcome</h1>
      <p>
        We're glad you're here!
      </p>
    </Jumbotron>
    <CardDeck>
      <Card>
        <Card.Body>
          <Card.Title>Coming Soon</Card.Title>
          <Card.Text>
            January 2020, we will have a new product hitting the market.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Mailing List</Card.Title>
          <Card.Text>
            We would love to be your friend.
            Click below to join our mailing list!
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  </Container>
);

export default Landing;
import React, {useState} from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
<<<<<<< HEAD
import Container from 'react-bootstrap/Container';
=======
import Button from 'react-bootstrap/Button';
import Container from '../../styled/Container';
import Alert from 'react-bootstrap/Alert';
import CardDeck from 'react-bootstrap/CardDeck';
>>>>>>> 5917a40248d81dbb9a8de5d5c8d2df334016ae3b
import Row from 'react-bootstrap/Row';

const Landing = () => (
  <Container>
    <Jumbotron>
      <h1>Welcome</h1>
      <p>
        We're glad you're here!
      </p>
    </Jumbotron>
    <Row>
      <Card className='m-1 col-md-6 col-lg-4'>
        <Card.Body>
          <Card.Title>Coming Soon</Card.Title>
          <Card.Text>
            January 2020, we will have a new product hitting the market.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='m-1 col-md-6 col-lg-4'>
        <Card.Body>
          <Card.Title>Recruiting</Card.Title>
          <Card.Text>
            If you think you have what it takes, interviews for a Full-Stack Web Developer position are under way.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='m-1 col-md-6 col-lg-4'>
        <Card.Body>
          <Card.Title>Mailing List</Card.Title>
          <Card.Text>
            We would love to be your friend.
          </Card.Text>
          <Card.Text>
            Click below to join our mailing list!
          </Card.Text>
        </Card.Body>
      </Card>
    </Row>

  </Container>
);

export default Landing;
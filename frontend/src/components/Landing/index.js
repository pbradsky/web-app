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
              We are very excited to announce that we will be live in just a few short weeks!
              <br /><br />
              All suggestions, questions, comments, critiques, and concerns are appreciated
              as we prepare to venture out into the world.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Reach Out</Card.Title>
          <Card.Text>
            If you have something to say,
            click the button below to get in touch.
            <br /><br />
            We're here to listen.
          </Card.Text>
          <Link to={ROUTES.CONTACT}><Button block variant='secondary'>Contact Us</Button></Link>
        </Card.Body>
      </Card>
    </CardDeck>
  </Container>
);

export default Landing;
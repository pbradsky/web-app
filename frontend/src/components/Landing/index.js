import React from 'react';
import { SignInButton } from '../SignIn';
import { JoinNowButton } from '../SignUp';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

const Landing = () => (
  <Container>
    <br />
    <Alert variant='info' dismissible>
      Note: We are currently undergoing construction!
    </Alert>
    <Jumbotron>
        <h1>Welcome</h1>
        <br />
        <p className='body-primary'>
          We are happy to see you here.
        </p>

        <p className='body-secondary'>
          Please log in to your account, or sign up if you don't
          have one yet.
        </p>
    </Jumbotron>
    <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>People are our purpose.</Card.Title>
        <Card.Text>
          If you are interested in joining our family, click the subscribe button below.
          Doing that will add you to our mailing list, where you will hear all about what's up-and-coming!
          <br />Together we will do great things.
        </Card.Text>
      </Card.Body>
      <Button variant="outline-primary">Subscribe</Button>
    </Card>
    <br />
  </Container>
);

export default Landing;
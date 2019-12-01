import React, {useState} from 'react';
import { SignInButton } from '../SignIn';
import { JoinNowButton } from '../SignUp';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import CardDeck from 'react-bootstrap/CardDeck'

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="info">
        <Alert.Heading>Note</Alert.Heading>
        <p>
          We are currently under construction!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-info">
            Gotcha!
          </Button>
        </div>
      </Alert>
    </>
  );
}

const Landing = () => (
  <div>
    <Jumbotron>
      <h3>Welcome</h3>
      <p className='body-secondary'>
        Our website is currently under construction! Thanks for your patience.
      </p>
    </Jumbotron>
    <Container>
      <CardDeck>
        <Card>
          <Card.Header as="h4">Coming Soon</Card.Header>
          <Card.Body>
            <Card.Title className='text-muted'>What's New?</Card.Title>
            <Card.Text>
              January 2020, we will have a new product hitting the market.
              <br />
              <hr />
            </Card.Text>
          </Card.Body>
          <Button variant="outline-primary">Learn more</Button>
        </Card>
        <Card>
          <Card.Header as='h4'>Recruiting</Card.Header>
          <Card.Body>
            <Card.Title className='text-muted'>Join Us</Card.Title>
            <Card.Text>
              If you think you have what it takes, interviews for a Full-Stack Web Developer position are under way.
              <hr />
            </Card.Text>
          </Card.Body>
          <Button variant="outline-primary">Contact Us</Button>
        </Card>
        <Card>
          <Card.Header as='h4'>Mailing List</Card.Header>
          <Card.Body>
            <Card.Title className='text-muted'>Be In the Know</Card.Title>
            <Card.Text>
              We would love to be your friend.
              <hr />
              Click below to join our mailing list!
            </Card.Text>
          </Card.Body>
          <Button variant="outline-primary">Subscribe</Button>
        </Card>
      </CardDeck>
      <br />
    </Container>
  </div>
);

export default Landing;
export { AlertDismissible };
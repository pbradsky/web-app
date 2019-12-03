import React, {useState} from 'react';

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
      <Alert show={show} variant="primary" border='primary'>
        <Alert.Heading>Note</Alert.Heading>
        <p>
          We are currently under construction!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="primary">
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
            <Card.Text>
              January 2020, we will have a new product hitting the market.
              <br />
            </Card.Text>
            <hr />
          </Card.Body>
          <Button variant="outline-primary">Learn more</Button>
        </Card>
        <Card>
          <Card.Header as='h4'>Recruiting</Card.Header>
          <Card.Body>
            <Card.Text>
              If you think you have what it takes, interviews for a Full-Stack Web Developer position are under way.
            </Card.Text>
            <hr />
          </Card.Body>
          <Button variant="outline-primary">Contact Us</Button>
        </Card>
        <Card>
          <Card.Header as='h4'>Mailing List</Card.Header>
          <Card.Body>
            <Card.Text>
              We would love to be your friend.
            </Card.Text>
            <hr />
            <Card.Text>
              Click below to join our mailing list!
            </Card.Text>
          </Card.Body>
          <Button variant='outline-primary'>Subscribe</Button>
        </Card>
      </CardDeck>
      <br />
      <AlertDismissible />
      <br />
    </Container>
  </div>
);

export default Landing;
export { AlertDismissible };
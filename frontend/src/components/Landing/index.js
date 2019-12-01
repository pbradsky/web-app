import React, {useState} from 'react';
import { SignInButton } from '../SignIn';
import { JoinNowButton } from '../SignUp';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

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
      <h1>Welcome</h1>
      <p className='body-secondary'>
        Please log in to your account, or sign up if you don't
        have one yet.
      </p>
    </Jumbotron>
    <Container>
      <AlertDismissible />
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
    </Container>
  </div>
);

export default Landing;
export { AlertDismissible };
import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import * as ROUTES from 'constants/routes';

const AboutUsButton = () => (
  <Link to={ROUTES.ABOUT}>
    <Button variant='outline-secondary'>
      Learn More
    </Button>
  </Link>
);

const AboutPage = () => (
  <Container>
    <Card className='mt-4 mb-4'>
      <Card.Body>
        <Card.Title>About Us</Card.Title>
        <hr />
        <Card.Text>
          Jurne is a virtual contracting service that allows users to quickly and effectively get
          behind the wheel of cars that they would like to test drive.
        </Card.Text>
        <Card.Text>
          We do this by allowing you to sign-up for test-drives online, right here on our website.
        </Card.Text>
        <Card.Text>
          We are partner with dealerships dedicated to excellent service and cutting edge technology
          to move our vision forward.
        </Card.Text>
        <Card.Text>
          We hope to provide you with a seamless experience, saving you time (and money too)!
        </Card.Text>
      </Card.Body>
    </Card>
  </Container>
);

export default AboutPage;
export {AboutUsButton};
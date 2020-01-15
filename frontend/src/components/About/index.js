import React from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

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
          By partnering with dealerships dedicated to excellent customer service and cutting edge technology
          we hope to change the car-buying experience for the better!
        </Card.Text>
        <Card.Text>
          With us you'll be saving you time (and money too)!
        </Card.Text>
      </Card.Body>
    </Card>
  </Container>
);

export default AboutPage;
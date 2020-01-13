import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Wrapper from 'styled/Wrapper';
import Jumbotron from 'react-bootstrap/Jumbotron';
import bgimage from 'assets/jumboImage.jpeg';

import * as ROUTES from 'constants/routes';

const LandingJumbotron = () => (
  <Jumbotron fluid style={{
    backgroundImage: `url(${bgimage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom'}}
  >
    <Container className='text-center'>
      <br /><br /><br />
      <h1 className=' mt-5 text-white'>Your Drive Starts Here</h1>
      <p className='text-white'>The easiest way to test-drive.</p>
      <Link to={ROUTES.SIGN_UP}>
        <Button className='mt-4' size='lg'>
          Test Drive Today
        </Button>
      </Link>
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br />
      <AboutUsButton />
    </Container>
  </Jumbotron>
);

const AboutUsButton = () => (
  <Link to={ROUTES.LANDING}>
    <Button variant='secondary'>
      Learn More
    </Button>
  </Link>
);

const Landing = () => (
  <Wrapper>
    <LandingJumbotron />
  </Wrapper>
);

export default Landing;
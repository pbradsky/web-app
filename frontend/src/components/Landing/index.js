import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
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
    backgroundPosition: 'bottom',
    paddingBottom: '15em',
    paddingTop: '15em'}}
  >
    <Container className='text-center'>
      <div>
        <h1 className='mt-5 text-white'>Your Drive Starts Here</h1>
        <p className='text-white'>The easiest way to test-drive.</p>
        <Link to={ROUTES.SIGN_UP}>
          <Button className='mt-4' size='lg'>
            Test Drive Today
          </Button>
        </Link>
      </div>
      <br />
      <div className='mb-2 h-100'>
        <AboutUsButton />
      </div>
    </Container>
  </Jumbotron>
);

const AboutUsButton = () => (
  <Link to={ROUTES.LANDING}>
    <Button variant='outline-secondary' className='mb-auto'>
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
import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Wrapper from 'styled/Wrapper';
import bgimage from 'assets/jumboImage.jpeg';

import styled from 'styled-components';

import * as ROUTES from 'constants/routes';

const BackdropImage = styled.div`
    background-image: url(${bgimage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    padding-bottom: 15em;
    padding-top: 15em;
`;

const Backdrop = () => (
  <BackdropImage>
    <Container className='text-center'>
      <div>
        <h1 className='m-auto text-white'>Your Drive Starts Here</h1>
        <p className='text-white'>The easiest way to test-drive.</p>
        <Link to={ROUTES.SIGN_UP}>
          <Button className='m-auto' size='lg'>
            Test Drive Today
          </Button>
        </Link>
      </div>
      <br />
      <div className='mb-2 h-100'>
        <AboutUsButton />
      </div>
    </Container>
  </BackdropImage>
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
    <Backdrop />
  </Wrapper>
);

export default Landing;
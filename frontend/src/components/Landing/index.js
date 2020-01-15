import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import bgimage from 'assets/jumboImage.jpeg';
import {AboutUsButton} from 'components/About';

import styled from 'styled-components';

import * as ROUTES from 'constants/routes';

const BackdropImage = styled.div`
    background-image: url(${bgimage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    min-height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

const Landing = () => (
  <BackdropImage>
    <div className='mt-auto'>
      <h1 className='text-white'>Your Drive Starts Here</h1>
      <p className='text-white'>The easiest way to test-drive.</p>
      <Link to={ROUTES.SIGN_UP}>
        <Button size='lg'>
          Test Drive Today
        </Button>
      </Link>
    </div>
    <div className='mt-auto mb-4'>
      <AboutUsButton />
    </div>
  </BackdropImage>
);

export default Landing;
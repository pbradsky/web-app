import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import bgimage from 'assets/jumboImage.jpeg';
import steps from 'assets/jurne-steps.png';

import styled from 'styled-components';

const BackdropImage = styled.div`
    background-image: url(${bgimage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    min-height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
`;

const AboutPage = () => (
  <BackdropImage>
   <div className='mt-auto mb-auto p-4'>
      <Row>
        <Col className='p-0'>
          <img className='p-0 col-12' src={steps} alt='jurne easy process' />
        </Col>
      </Row>
      <Row className='text-white text-center mt-4 mb-auto'>
        <Col className='col-3'><p>Make an Account</p></Col>
        <Col className='col-3'><p>Complete our Form</p></Col>
        <Col className='col-3'><p>Finalize with Dealership</p></Col>
        <Col className='col-3'><p>Go Test Drive!</p></Col>
      </Row>
    </div>
  </BackdropImage>

);

export default AboutPage;
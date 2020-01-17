import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import bgimage from 'assets/jumboImage.jpeg';
import processimage from 'assets/process.png';

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
   <Container>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row className='text-white text-center mt-4'>
        <Col className='col-3'><p>Create a Jurne Account</p></Col>
        <Col className='col-3'><p>Select a Dealership</p></Col>
        <Col className='col-3'><p>Fill Out a Contract</p></Col>
        <Col className='col-3'><p>Go Test Drive!</p></Col>
      </Row>
    </Container>
  </BackdropImage>

);

export default AboutPage;
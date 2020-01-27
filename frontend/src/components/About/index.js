import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import steps from 'assets/jurne-steps.png';

import styled from 'styled-components';

const BackdropImage = styled.div`
  background-color: #f7f7f7;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  font-weight: 900;
`;

const AboutPage = React.forwardRef((props, ref) => (
  <BackdropImage ref={ref}>
    <div className='m-auto w-75'>
      <Row>
        <Col className='p-0'>
          <img className='p-0 col-12' src={steps} alt='jurne easy process' />
        </Col>
      </Row>
      <Row className='text-center mt-4 mb-auto'>
        <Col className='col-3'><P>Make an Account</P></Col>
        <Col className='col-3'><P>Complete our Form</P></Col>
        <Col className='col-3'><P>Finalize with Dealership</P></Col>
        <Col className='col-3'><P>Go Test Drive!</P></Col>
      </Row>
    </div>
  </BackdropImage>
));

export default AboutPage;
import React from 'react';
import styled from 'styled-components';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import steps from 'assets/jurne-steps.png';

const BackdropImage = styled.div`
    background-color: #f7f7f7;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    min-height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
`;

const AboutPage = React.forwardRef((_props, ref) => (
  <BackdropImage ref={ref}>
    <div className='m-auto w-75'>
      <Row>
        <Col className='p-0'>
          <img className='p-0 col-12' src={steps} alt='jurne easy process' />
        </Col>
      </Row>
      <Row className='text-center mt-4 mb-auto'>
        <Col className='col-3'><p>Make an Account</p></Col>
        <Col className='col-3'><p>Complete our Form</p></Col>
        <Col className='col-3'><p>Finalize with Dealership</p></Col>
        <Col className='col-3'><p>Go Test Drive!</p></Col>
      </Row>
    </div>
  </BackdropImage>
));

export default AboutPage;
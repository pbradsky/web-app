import React from 'react';

import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Container from 'styled/Container';

import PasswordChangeCard from '../PasswordChange';
import DeleteAccountCard from '../DeleteAccount';

import jumboimage from 'assets/jumbo.jpg';

import { withAuthorization, AuthUserContext } from 'api/Session';
import * as CONDITIONS from 'constants/conditions';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Container>
        <Jumbotron style={{ backgroundImage: `url(${jumboimage})`, backgroundSize: 'cover' }}>
          <h1 style={{color: 'white'}}>Account Settings</h1>
          <p style={{color: 'white'}}>{authUser.email}</p>
          <hr className='col-6' style={{float: 'left', borderColor: 'white'}} />
          <br /><br />
        </Jumbotron>
        <Row>
            <Col md>
              <PasswordChangeCard />
            </Col>
            <Col md>
              <DeleteAccountCard />
            </Col>
        </Row>
      </Container>
    )}
  </AuthUserContext.Consumer>
);

export default withAuthorization(CONDITIONS.isSignedInUser)(AccountPage);
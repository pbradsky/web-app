import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Container from 'styled/Container';

import { withAuthorization } from 'api/Session';
import * as CONDITIONS from 'constants/conditions';

const ApprovalPage = () => (
  <Container>
    <Jumbotron>
      <h1>User Approval</h1>
    </Jumbotron>
    <Row>
    </Row>
  </Container>
);

export default withAuthorization(CONDITIONS.isSignedInDev)(ApprovalPage);
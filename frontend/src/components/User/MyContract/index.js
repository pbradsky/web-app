import React from 'react';
import { compose } from 'recompose';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import { withAuthorization, withUser } from 'api/Session';
import * as CONDITIONS from 'constants/conditions';

const MyContractPage = ({ authUser }) => (
  <Container>
    <Jumbotron>
      <h1>My Contract</h1>
      <p>{authUser.email}</p>
      <hr />
    </Jumbotron>
  </Container>
);

export default compose(
  withUser,
  withAuthorization(CONDITIONS.isSignedInCompleteUser)
)(MyContractPage);
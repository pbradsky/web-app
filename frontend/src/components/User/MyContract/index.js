import React from 'react';
import { compose } from 'recompose';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import {
  PreambleText,
  ContractFormText,
  SignedUserText
} from 'components/Registration/Contract/Util/text';

import { withAuthorization, withUser } from 'api/Session';
import formatAddress from 'utils/address';
import * as CONDITIONS from 'constants/conditions';

const MyContractPage = ({ authUser }) => {
  const { email, fullName, phone, license, contract } = authUser;
  const fullAddress = formatAddress(authUser);

  return (
    <Container>
      <Jumbotron>
        <h1>My Signed Contract</h1>
        <p>{email}</p>
      </Jumbotron>
      <Card style={{overflowY: 'scroll', height: '50vh'}}>
        <Card.Body>
          <ContractFormText
            name={fullName}
            address={fullAddress}
            phone={phone}
            license={license}
            />
          <PreambleText />
          <SignedUserText
            contract={contract}
            />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default compose(
  withUser,
  withAuthorization(CONDITIONS.isSignedInCompleteUser)
)(MyContractPage);
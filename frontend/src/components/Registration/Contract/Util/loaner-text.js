import React from 'react';

import Card from 'react-bootstrap/Card';

const ContractFormText = ({ name, address, phone, license, dob}) => (
  <Card.Body>
    <Card.Title>Customer Information:</Card.Title>
    <Card.Text>Name: {name}</Card.Text>
    <Card.Text>Address: {address}</Card.Text>
    <Card.Text>Driver's License Number: {license.number}</Card.Text>
    <Card.Text>Driver's License State: {license.state}</Card.Text>
    <Card.Text>Driver's License Expiration: {license.expiration}</Card.Text>
    <Card.Text>Date of Birth: {dob}</Card.Text>
    <Card.Text>Phone Number: {phone}</Card.Text>
    <Card.Text>Insurance Information: (see below)</Card.Text>
  </Card.Body>
);

const PreambleText = () => (
  <Card.Body>
    <Card.Title>
      Washington Vehicle Use Agreement Terms and Conditions ("Terms and Conditions")
    </Card.Title>
    <ol>
      <li>
        Definitions.
      </li>
    </ol>
  </Card.Body>
);

const SignedUserText = ({ contract }) => (
  <Card.Body>
    <Card.Text>Signature: {contract.signature}</Card.Text>
    <Card.Text>Date: {contract.date}</Card.Text>
  </Card.Body>
);

export { PreambleText, ContractFormText, SignedUserText };
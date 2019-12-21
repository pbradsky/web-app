import React, { Component, useRef } from 'react';
import ReactToPrint from 'react-to-print';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import formatAddress from 'utils/address';
import * as CONTRACT from 'constants/contractText';

class PrintableContract extends Component {
  render() {
    const { fullName, phone, license, contract } = this.props.user;
    const fullAddress = formatAddress(this.props.user);

    return (
      <Card.Body style={{whiteSpace: 'pre-line'}}>
        <Card.Text>
          {CONTRACT.CONTRACT_FORM(fullName, fullAddress, phone, license)}
        </Card.Text>
        <Card.Text>
          {CONTRACT.SIGNATURE_FORM}
        </Card.Text>
        <Card.Text>
          {CONTRACT.SIGNATURE}
        </Card.Text>
        <Card.Text>
          {CONTRACT.PREAMBLE}
        </Card.Text>
        <Card.Text>
          {CONTRACT.SIGNED_USER(contract)}
        </Card.Text>
      </Card.Body>
    );
  }
}

const PrintContractButton = ({ user }) => {
  const componentRef = useRef();
  const printTrigger = () => <Button>Print Contract</Button>;

  return (
    !!user.contract
      ? <>
          <hr />
          <ReactToPrint
            trigger={printTrigger}
            content={() => componentRef.current}
          />
          <div style={{display: 'none'}}>
            <PrintableContract
              ref={componentRef}
              user={user}
            />
          </div>
        </>
      : null
  );
};

export default PrintContractButton;
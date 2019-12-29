import React, { Component, useRef } from 'react';
import ReactToPrint from 'react-to-print';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PreambleText, ContractFormText, SignedUserText } from './text';

import formatAddress from 'utils/address';

class PrintableContract extends Component {
  render() {
    const { fullName, phone, license, contract } = this.props.user;
    const fullAddress = formatAddress(this.props.user);

    return (
      <Card.Body style={{whiteSpace: 'pre-line'}}>
        <ContractFormText name={fullName} address={fullAddress} phone={phone} license={license} />
        <PreambleText />
        <SignedUserText contract={contract} />
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
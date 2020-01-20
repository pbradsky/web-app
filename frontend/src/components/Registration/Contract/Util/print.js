import React, { Component, useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

import { PreambleText, ContractFormText, SignedUserText } from './text';

import { getImages } from 'utils/images';
import formatAddress from 'utils/address';

class PrintableContract extends Component {

  render() {
    const { proofOfInsurance, driversLicenseBack, driversLicenseFront } = this.props.images;
    const { fullName, phone, license, contract } = this.props.user;
    const fullAddress = formatAddress(this.props.user);

    return (
      <Container>
        <Card.Body style={{whiteSpace: 'pre-line'}}>
          <Card.Title className='text-center'><strong>Dealer's Permit For Demonstration</strong></Card.Title>
          <ContractFormText 
            name={fullName} 
            address={fullAddress} 
            phone={phone} 
            license={license} 
            proofOfInsurance={proofOfInsurance}
            driversLicenseFront={driversLicenseFront}
            driversLicenseBack={driversLicenseBack}
            />
          <PreambleText />
          <SignedUserText contract={contract} />
        </Card.Body>
      </Container>

    );
  }
}

const PrintContractButton = ({ user, storage }) => {
  let componentRef = useRef();
  const printTrigger = () => <Button size='sm'>Print Contract</Button>;
  const [images, setImages] = useState(null);

  const prepareContent = async () => {
    if (images) return;
    let imgs = {
      proofOfInsurance: null,
      driversLicenseFront: null,
      driversLicenseBack: null
    }
    await getImages(storage, user.uid).then(values => {
        const poiPromise = new Promise((resolve, reject) => {
          if (values.proofOfInsurance)
            imgs.proofOfInsurance = <Image src={values.proofOfInsurance} width="400" onLoad={() => resolve(0)} />;
        });
        const dlfPromise = new Promise((resolve, reject) => {
          if (values.driversLicenseFront)
            imgs.driversLicenseFront = <Image src={values.driversLicenseFront} width="400" onLoad={() => resolve(0)} />;
        });
        const dlbPromise = new Promise((resolve, reject) => {
          if (values.driversLicenseBack)
            imgs.driversLicenseBack = <Image src={values.driversLicenseBack} width="400" onLoad={() => resolve(0)} />;
        });
        Promise.all([poiPromise, dlfPromise, dlbPromise]).then(setImages(imgs));
    });
  }

  return (
    !!user.contract
      ?
      <>
        <ReactToPrint
          trigger={printTrigger}
          content={() => componentRef.current}
          onBeforeGetContent={prepareContent}
        />
        {images && 
          <div style={{display: 'none'}}>
            <PrintableContract
              ref={componentRef}
              user={user}
              images={images}
            />
          </div>
        }
      </>
      : null
  );
};

export default PrintContractButton;
import React from 'react';

import Card from 'react-bootstrap/Card';


const ContractFormText = ({ name, address, phone, license, proofOfInsurance, driversLicenseFront, driversLicenseBack }) => (
  <Card.Body>
    <Card.Title>Operator:</Card.Title>
    <Card.Text>Name: {name}</Card.Text>
    <Card.Text>Address: {address}</Card.Text>
    <Card.Text>Phone Number: {phone}</Card.Text>
    <Card.Text>Operator License Number: {license}</Card.Text>
    {proofOfInsurance && 
      <Card.Body>
        <Card.Text>Proof of Insurance</Card.Text>
        {proofOfInsurance}
      </Card.Body>
    }
    {driversLicenseFront &&
      <Card.Body>
        <Card.Text>Driver's License (front)</Card.Text>
        {driversLicenseFront}
      </Card.Body>
    }
    {driversLicenseBack &&
      <Card.Body>
        <Card.Text>Driver's License (back)</Card.Text>
        {driversLicenseBack}
      </Card.Body>
    }
  </Card.Body>
);

const PreambleText = () => (
  <Card.Body>
    <Card.Title>
      IMPORTANT: READ BEFORE SIGNING
    </Card.Title>
    <Card.Text>
      The above named operator is authorized to drive the described vehicle for
      the purpose of purchase during the period indicated below. This permit is
      subject to inspection by all law enforcement officers when the vehicle is
      being operated for demonstration.
    </Card.Text>
    <Card.Text>
      The undersigned Operator acknowledges that the dealer is not providing any
      type of insurance protection, including but not liimited to public
      liability or collision insurance, and is not collecting any charge
      therefore. The undersigned further acknowledges that the air bag(s) may
      have been deactivated or an air bag on/off switch may have been installed
      on this vehicle, that the dealer assumes no responsibility or liability
      for any such deactivation or installation, and that the dealer is not
      warranting the operability or reliability of any such air bag deactivation
      on/off switch.
    </Card.Text>
    <Card.Text>
      In consideration of the foregoing and permission to use the vehicle, the
      undersigned Operator hereby waives any claim or cause of action against
      dealer resulting from the undersigned’s operation of the described
      vehicle, and agrees to pay for all loss and damage to the vehicle. The
      undersigned Operator further agrees to fully indemnify, protect, defend,
      and hold dealer harmless from any and all damages and liability,
      irrespective of fault, resulting in any way from Operator’s use of the
      vehicle.
    </Card.Text>

    <Card.Title>Dealer:</Card.Title>
    <Card.Text>Name: Klein Honda</Card.Text>
    <Card.Text>Address: 10611 Evergreen Way Everett, WA 98204</Card.Text>
    <Card.Text>Dealer's Signature: #0335</Card.Text>
    <Card.Text>Dealer Number: 425-355-7500</Card.Text>

    <Card.Title>AGREEMENT FOR DEMONSTRATION USE OF VEHICLE</Card.Title>
    <Card.Text>
      In consideration of the agreements contained herein, Dealer hereby permits
      Operator to possess and use the motor vehicle descibed herein upon the
      terms and conditions set forth on both sides of this agreement.
    </Card.Text>
    <ol>
      <li>
        Dealer and Operator expressly agree that for the term of this
        agreement Operator is not and does not become an agent, servant, or
        employee of Dealer in any manner whatsoever.
      </li>
      <li>
        Operator acknowledges that the vehicle is the rightful property of
        Dealer although registered title may be in some third party, and
        further acknowledges that he received said vehicle in good and safe
        mechanical condition and agrees that he will return said vehicle to
        Dealer at Dealer’s address herein the same condition as he received
        it, ordinary wear and tear excepted, on the return date stated or
        sooner upon demand of Dealer. In states where the law is so
        applicable, Operator acknowledges that failure to promptly return the
        vehicle may result in criminal prosecution after notification pursuant
        to said laws.
      </li>
      <li>
        Operator agrees that the vehicle will not be operated in violation of
        any law governing the use or return thereof, or in violation of any of
        the other terms and conditions set forth above.
      </li>
      <li>
        Operator agrees that he will not operate the vehicle outside the state
        of Washington.
      </li>
      <li>
        Operator expressly agrees that the motor vehicle given to him shall
        not be operated:
        <ol type='a'>
          <li>
            To carry passengers for a consideration, express or implied, or in
            connection with the Operator’s employment;
          </li>
          <li>
            In violation of any terms and conditions of this agreement;
          </li>
          <li>
            In any race or speed test or contest;
          </li>
          <li>
            To propel or tow any trailer or vehicle used as a trailer;
          </li>
          <li>
            By any person under the influence of intoxicants or narcotics;
          </li>
          <li>
            By any person with a suspended or revoked or invalid driver’s
            license;
          </li>
          <li>
            For any illegal purpose;
          </li>
          <li>
            By any minor or anyone other than the Operator.
          </li>
        </ol>
      </li>
      <li>
        The Dealer is not providing insurance of any nature or kind including
        but not limited to collision or public liability insurance. Operator
        must have his own insurance in order to be protected.
      </li>
      <li>
        Operator agrees to replace gasoline used if the vehicle is driven over
        50 miles.
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
import React from 'react';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import LoanerList from './list';

// This is part of the Service Dept. Suite
// 1. Vehicles can be added/removed from the list.
// 2. Fleet can be managed from here, Available/Out.
// 3. Look and feel of our dashboard. Badges offer a quick look for vehicle status.
// 4. Accordion gives more details about the car.
// 5. Search on this page looks for vehicles by Make, Model, VIN, status.
// 6. This page updates the dropdown menu and autofill on Loaner Form.
// Vehicle sshould have VIN, Make, Model, Year, Color, License, Status, Mileage
const LoanerFleetPage = () => {
  const vehicles = [
    {
      vin: '123VIN456ABC',
      make: 'Honda',
      model: 'Civic',
      year: '2002',
      color: 'gray',
      license: 'L1C3N53',
      status: 'available'
    }
  ];

  return (
    <Container>
      <Jumbotron>
        <h1>Loaner Fleet Dashboard</h1>
      </Jumbotron>
      <br />
      <LoanerList vehicles={vehicles} />
    </Container>
  );
};

export default LoanerFleetPage;
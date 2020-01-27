import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

const DataCard = ({ label, data }) => (
  !!data
    ? <Card.Text>
        {label}: {data}
      </Card.Text>
    : null
);

// VehicleList displays an accordion list of vehicles.
//
// Each vehicle object should have a
//     VIN, Make, Model, Year, Color, License, Status, Mileage, (and history?).
const VehicleList = ({ vehicles }) => (
  <Accordion className='mb-4'>
    <Card bg='primary' text='white'>
      <Card.Header as='h3'>Loaner Vehicle List</Card.Header>
    </Card>
    {vehicles.map(vehicle => (
      <Card key={vehicle.vin}>
        <Accordion.Toggle
          as={Card.Header}
          style={{cursor: 'pointer'}}
          eventKey={vehicle.vin}>
          {vehicle.model}
          <Badge
            style={{float: 'right', width: '100px'}}
            variant='secondary'
            key={index}>
              {vehicle.status}
          </Badge>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={vehicle.vin}>
          <Card.Body>
            <Card className='m-2'>
              <Card.Body>
                <Card.Title>Vehicle Info</Card.Title>
                <hr />
                <DataCard label='Status' data={vehicle.status} />
                <DataCard label='VIN' data={vehicle.vin} />
                <DataCard label='Make' data={vehicle.make} />
                <DataCard label='Model' data={vehicle.model} />
                <DataCard label='Year' data={vehicle.year} />
                <DataCard label='Color' data={vehicle.color} />
                <DataCard label='License No' data={vehicle.license} />
                <DataCard label='Mileage' data={vehicle.mileage} />
              </Card.Body>
            </Card>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    ))}
  </Accordion>
);

export default VehicleList;
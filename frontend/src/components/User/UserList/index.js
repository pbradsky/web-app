import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { ApprovalLink } from 'components/User/Approval';

import * as CONDITIONS from 'constants/conditions';
import formatAddress from 'utils/address';

const DataCard = ({ label, data }) => (
  !!data
    ? <Card.Text>
        {label}: {data}
      </Card.Text>
    : null
);

const UserList = ({ users, isDev }) => (
  <Accordion>
    <Card bg='success' text='white'>
      <Card.Header as='h3'>User List</Card.Header>
    </Card>
    {users.map(user => (
      <Card key={user.uid}>
        <Accordion.Toggle
          as={Card.Header}
          style={{cursor: 'pointer'}}
          eventKey={user.uid}>
          {user.username}
          {isDev && !CONDITIONS.isSignedInApprovedUser(user) &&
            <Badge
              style={{float: 'right'}}
              variant='warning'
              className='p-2'>INCOMPLETE</Badge>}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={user.uid}>
            <Card.Body>
              <Card className='m-2'>
                <Card.Body>
                  <Card.Title style={{color: '#27A745'}}>Account Info</Card.Title>
                  <hr />
                  <DataCard label='Full Name' data={user.fullName} />
                  <DataCard label='Email' data={user.email} />
                  <DataCard label='Phone Number' data={user.phone} />
                  <DataCard label='Address' data={formatAddress(user)} />
                  <DataCard label='License No' data={user.license} />
                  <DataCard label='ID' data={user.uid} />
                </Card.Body>
              </Card>
            {user.contract &&
              <Card className='m-2'>
                <Card.Body>
                  <Card.Title style={{color: '#27A745'}}>Contract Info</Card.Title>
                  <hr />
                  <DataCard label='Signature' data={user.contract.signature} />
                  <DataCard label='Vehicle' data={user.contract.vehicle} />
                  <DataCard label='Date' data={user.contract.date} />
                </Card.Body>
              </Card>}
            {user.roles && Object.keys(user.roles).map((role, index) =>
              <Badge
                key={index}
                variant='success'
                className='m-2 p-2'>{role}</Badge>
            )}
            <ApprovalLink isDev={isDev} uid={user.uid} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    ))}
  </Accordion>
);

export default UserList;
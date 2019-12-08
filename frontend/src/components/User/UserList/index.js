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
    <Card bg='secondary' text='white'>
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
              variant='danger'
              className='m-1 p-2'>NOT APPROVED</Badge>}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={user.uid}>
          <Card.Body>
            <DataCard label='Email' data={user.email} />
            <DataCard label='ID' data={user.uid} />
            <DataCard label='Full Name' data={user.fullName} />
            <DataCard label='Phone Number' data={user.phone} />
            <DataCard label='Address' data={formatAddress(user)} />
            <DataCard label='License No' data={user.license} />
            {user.contract &&
              <>
                <Card.Text>Contract data below: </Card.Text>
                <DataCard label='Signature' data={user.contract.signature} />
                <DataCard label='Vehicle' data={user.contract.vehicle} />
                <DataCard label='Date' data={user.contract.date} />
              </>}
            {user.roles && Object.keys(user.roles).map((role, index) =>
              <Badge
                key={index}
                variant='primary'
                className='m-1 p-2'>{role}</Badge>
            )}
            <ApprovalLink isDev={isDev} uid={user.uid} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    ))}
  </Accordion>
);

export default UserList;
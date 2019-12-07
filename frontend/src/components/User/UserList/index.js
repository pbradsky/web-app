import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { ApprovalLink } from 'components/User/Approval';

import * as CONDITIONS from 'constants/conditions';

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
            <Card.Text>Email: {user.email}</Card.Text>
            <Card.Text>ID: {user.uid}</Card.Text>
            <Card.Text>fullName: {user.fullName}</Card.Text>
            <Card.Text>phone: {user.phone}</Card.Text>
            <Card.Text>address: {user.address}</Card.Text>
            <Card.Text>apt: {user.apt}</Card.Text>
            <Card.Text>city: {user.city}</Card.Text>
            <Card.Text>state: {user.state}</Card.Text>
            <Card.Text>zip: {user.zip}</Card.Text>
            <Card.Text>license: {user.license}</Card.Text>
            <Card.Text>contractData... </Card.Text>
            <Card.Text>signature: {user.contractSignature}</Card.Text>
            <Card.Text>vehicle: {user.contractVehicle}</Card.Text>
            <Card.Text>date: {user.contractDate}</Card.Text>
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
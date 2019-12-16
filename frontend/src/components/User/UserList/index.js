import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { UserDetailsLink } from 'components/User/UserDetails';

import * as CONDITIONS from 'constants/conditions';
import formatAddress from 'utils/address';

const DataCard = ({ label, data }) => (
  !!data
    ? <Card.Text>
        {label}: {data}
      </Card.Text>
    : null
);

const UserList = ({ users, isAdmin }) => {
  const filteredUsers = isAdmin
    ? users
    : users.filter(CONDITIONS.isDealerViewable);

  return (
    <Accordion>
      <Card bg='primary' text='white'>
        <Card.Header as='h3'>User List</Card.Header>
      </Card>
      {filteredUsers.map(user => (
        <Card key={user.uid}>
          <Accordion.Toggle
            as={Card.Header}
            style={{cursor: 'pointer'}}
            eventKey={user.uid}>
            {user.username}
            {isAdmin && !CONDITIONS.isSignedInCompleteUser(user) &&
              <Badge
                style={{float: 'right'}}
                variant='secondary'
                className='p-2'>Incomplete</Badge>}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={user.uid}>
              <Card.Body>
                <Card className='m-2'>
                  <Card.Body>
                    <Card.Title>Account Info</Card.Title>
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
                    <Card.Title>Contract Info</Card.Title>
                    <hr />
                    <DataCard label='Signature' data={user.contract.signature} />
                    <DataCard label='Date' data={user.contract.date} />
                  </Card.Body>
                </Card>}
                <UserDetailsLink isAdmin={isAdmin} uid={user.uid} />
              {user.roles && Object.keys(user.roles).map((role, index) =>
                <Badge
                  variant='secondary'
                  key={index}
                  className='m-2 p-2'>{role}</Badge>
              )}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
}

export default UserList;
import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import PrintContractButton from 'components/Registration/Contract/Util/print';
import { UserDetailsLink } from 'components/User/UserDetails';

import * as CONDITIONS from 'constants/conditions';
import * as ROLES from 'constants/roles';
import formatAddress from 'utils/address';

const DataCard = ({ label, data }) => (
  !!data
    ? <Card.Text>
        {label}: {data}
      </Card.Text>
    : null
);

const UserList = ({ users, role, storage }) => {
  const isAdmin = role === ROLES.ADMIN;

  return (
    <Accordion className='mb-4'>
      <Card bg='primary' text='white'>
        <Card.Header as='h3'>User List</Card.Header>
      </Card>
      {users.map(user => (
        <Card key={user.uid}>
          <Accordion.Toggle
            as={Card.Header}
            style={{cursor: 'pointer'}}
            eventKey={user.uid}>
            {user.username}
            {user.roles && Object.keys(user.roles).map((role, index) =>
              <Badge
                    style={{float: 'right', width: '100px'}}
                    variant='secondary'
                    key={index}>
                      {role}
              </Badge>
            )}
            {/* Could be useful later on...
            {isAdmin && !CONDITIONS.isSignedInCompleteUser(user) &&
              <Badge
                style={{float: 'right'}}
                variant='secondary'
                className='p-2'>Incomplete</Badge>} */}
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
                </Card>
              }
              {(isAdmin || CONDITIONS.isSignedInCompleteUser(user)) &&
                <UserDetailsLink role={role} uid={user.uid} />}
              <PrintContractButton user={user} storage={storage}/>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
}

export default UserList;
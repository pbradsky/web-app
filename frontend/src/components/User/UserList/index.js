import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const UserList = ({ users }) => (
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
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={user.uid}>
          <Card.Body>
            <Card.Text>Email: {user.email}</Card.Text>
            <Card.Text>ID: {user.uid}</Card.Text>
            {user.roles && Object.keys(user.roles).map((role, index) =>
              <Badge
                key={index}
                variant='primary'
                className='m-1 p-2'>{role}</Badge>
            )}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    ))}
  </Accordion>
);

export default UserList;
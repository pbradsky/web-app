import React from 'react';

import { withFirebase } from '../Firebase';
import Nav from 'react-bootstrap/Nav';

const SignOutButton = ({ firebase }) => (
  <Nav.Link onClick={firebase.doSignOut}>
    Sign Out
  </Nav.Link>
);

export default withFirebase(SignOutButton);
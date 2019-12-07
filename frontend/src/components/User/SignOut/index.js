import React from 'react';

import { withFirebase } from 'api/Firebase';
import NavLink from 'styled/Nav';

const SignOutButton = ({ firebase }) => (
  <NavLink onClick={firebase.doSignOut}>
    Sign Out
  </NavLink>
);

export default withFirebase(SignOutButton);
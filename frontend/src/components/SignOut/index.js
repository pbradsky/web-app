import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
    <Dropdown.Item onClick={firebase.doSignOut}>
        Sign Out
    </Dropdown.Item>
);

export default withFirebase(SignOutButton);
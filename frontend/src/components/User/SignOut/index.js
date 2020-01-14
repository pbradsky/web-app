import React from 'react';
import { withRouter } from 'react-router';
import { compose } from 'recompose';

import Nav from 'react-bootstrap/Nav';

import { withFirebase } from 'api/Firebase';
import * as ROUTES from 'constants/routes';

const SignOutButton = ({ firebase, ...props }) => {
  const handleClick = (firebase, props) => () => {
    firebase.doSignOut();
    props.history.push(ROUTES.SIGN_IN);
  }

  return (
    <Nav.Link onClick={handleClick(firebase, props)} {...props}>
      Sign Out
    </Nav.Link>
  );
}

export default compose(
  withRouter,
  withFirebase
)(SignOutButton);
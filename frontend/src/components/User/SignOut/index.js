import React from 'react';
import { withRouter } from 'react-router';
import { compose } from 'recompose';

import { withFirebase } from 'api/Firebase';
import NavLink from 'styled/Nav';

import * as ROUTES from 'constants/routes';

const SignOutButton = ({ firebase, onClick, ...props }) => {
  const handleClick = (firebase, onClick, props) => () => {
    firebase.doSignOut();
    onClick();
    props.history.push(ROUTES.SIGN_IN);
  }

  return (
    <NavLink onClick={handleClick(firebase, onClick, props)}>
      Sign Out
    </NavLink>
  );
}

export default compose(
  withRouter,
  withFirebase
)(SignOutButton);
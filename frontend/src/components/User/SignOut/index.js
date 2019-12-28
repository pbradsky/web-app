import React from 'react';
import { withRouter } from 'react-router';
import { compose } from 'recompose';

import NavLink from 'styled/Nav';

import { withFirebase } from 'api/Firebase';
import * as ROUTES from 'constants/routes';

const SignOutButton = ({ firebase, ...props }) => {
  const handleClick = (firebase, props) => () => {
    firebase.doSignOut();
    props.history.push(ROUTES.SIGN_IN);
  }

  return (
    <NavLink onClick={handleClick(firebase, props)}>
      Sign Out
    </NavLink>
  );
}

export default compose(
  withRouter,
  withFirebase
)(SignOutButton);
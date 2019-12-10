import React from 'react';

import AuthUserContext from './context';

const withUser = Component => props => (
  <AuthUserContext.Consumer>
    {authUser => <Component {...props} authUser={authUser} />}
  </AuthUserContext.Consumer>
);

export default withUser;
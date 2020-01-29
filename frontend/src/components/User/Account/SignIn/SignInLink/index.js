import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from 'constants/routes';


const SignInLink = () => (
  <p>
    Already have an account? <Link to={ROUTES.SIGN_IN} style={{textDecoration: 'none'}}>
      Sign in!
    </Link>
  </p>
);

export default SignInLink;
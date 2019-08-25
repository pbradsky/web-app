import React from 'react';

import { withAuthorization } from '../Session';
import * as CONDITIONS from '../../constants/conditions';

const HomePage = () =>
  <div>
    <h1>Home Page</h1>
  </div>

export default withAuthorization(CONDITIONS.isSignedInUser)(HomePage);

import React from 'react';

import { withAuthorization } from '../Session';
import * as CONDITIONS from '../../constants/conditions';

const Vehicle = () => (
    <div>
        Vehicle!
    </div>
);

export default withAuthorization(CONDITIONS.isSignedInUser)(Vehicle);

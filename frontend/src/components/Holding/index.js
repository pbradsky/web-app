import React from 'react';

import { withAuthorization } from '../Session';
import * as CONDITIONS from '../../constants/conditions';

const Holding = () => (
    <div>
        <h2>Holding</h2>
        <p>
            Please wait while your account is approved.
            This process can take a few business days.
            Thank you for your patience!
        </p>
    </div>
);

export default withAuthorization(CONDITIONS.isSignedInUser)(Holding);
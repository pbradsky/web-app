import React from 'react';
import { SignInButton } from '../SignIn';
import { SignUpButton } from '../SignUp';

import './index.css';

const Landing = () => (
  <div className="right">
    <h1 className="left">JURNE</h1>
    <p >
      Residential Car-Share
    </p>
    <br />
    <p >
      Unlock with the Push of a Button
    </p>
    <br />
    <p >
      Helping Cars and Cities be Friends Again
    </p>
    <br />

    <SignInButton />
    <br />
    <SignUpButton />
  </div>
);

export default Landing;
import React from 'react';
import { SignInButton } from '../SignIn';
import { SignUpButton } from '../SignUp';

import './index.css';

const Landing = () => (
  <div className="outer">
    <h1 className="inner">JURNE
    <h1 className="slogan"> EXTRAORDINARY. EVERYDAY.</h1>
    </h1>

    <p >
      Residential Car-Share
    </p>
    <p >
      Unlock with the Push of a Button
    </p>
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
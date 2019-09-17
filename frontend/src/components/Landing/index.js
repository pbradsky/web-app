import React from 'react';
import { SignInButton } from '../SignIn';
import { SignUpButton } from '../SignUp';

import './index.css';

const Landing = () => (
  <div className='right'>
    <h1>Jurne</h1>
    <p className='body-primary'>
      Welcome! We are happy to see you here. Learn more about
      our product on our website!
    </p>
    <br />
    <p className='body-secondary'>
      Please log into your account below or sign up if you don't
      have an account!
    </p>

    <SignInButton />
    <SignUpButton />
  </div>
);

export default Landing;
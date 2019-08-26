import React from 'react';

import { SignInButton } from '../SignIn';
import { SignUpButton } from '../SignUp';

/* TODO: don't show this page / the signin/up buttons if user is logged in */

const Landing = () =>
  <div>
    <h1>Jūrne</h1>
    <p>
      Welcome! We are happy to see you here. Learn more about
      our product on our website!
    </p>
    <br />
    <p>
      Please log into your account below or sign up if you don't
      have an account!
    </p>

    <SignInButton />
    <SignUpButton />
  </div>

export default Landing;
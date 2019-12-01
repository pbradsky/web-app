import React from 'react';
import { SignInButton } from '../SignIn';
import { SignUpButton } from '../SignUp';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

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
    <Button size='lg' variant='success'></Button>
    <Button size='lg' variant='outline-success'></Button>

  </div>
);

export default Landing;
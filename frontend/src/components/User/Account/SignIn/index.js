import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import { SignUpLink } from 'components/Registration/SignUp';
import { PasswordForgetLink } from '../PasswordForget';

import { withFirebase } from 'api/Firebase';
import * as ROUTES from 'constants/routes';

const SignInPage = () => (
  <Container>
    <Card className='mt-4'>
      <Card.Body>
        <Card.Title>Sign In</Card.Title>
        <hr />
        <SignInForm />
        <hr />
        <PasswordForgetLink />
        <SignUpLink />
      </Card.Body>
    </Card>
  </Container>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.LANDING)
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Label>Email Address</Form.Label>
        <br />
        <Form.Control
          name='email'
          value={email}
          onChange={this.onChange}
          type='text'
          placeholder='Email Address'
        />
        <br />
        <Form.Label>Password</Form.Label>
        <Form.Control
          name='password'
          value={password}
          onChange={this.onChange}
          type='password'
          placeholder='Password'
        />
        <br />
        <Button disabled={isInvalid} type='submit'>
          Sign In
        </Button>
        <br /><br />
        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };

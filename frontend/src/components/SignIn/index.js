import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';

import Button from 'react-bootstrap/Button';
import {Card, Container, Form, Jumbotron} from 'react-bootstrap';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const SignInPage = () => (
  <Container>
    <br />
    <Card style={{ width: '36rem' }}>
      <Card.Header as='h4' className='p-auto'>Sign In</Card.Header>
      <Card.Body className="m-auto">
        <SignInForm />
        <br />
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

  componentWillUnmount() {
    if (this.listener) {
      this.listener();
    }
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });

        this.listener = this.props.firebase.onAuthUserListener(
          authUser => {
            if (authUser.roles[ROLES.APPROVED]) {
              this.props.history.push(ROUTES.DRIVE)
            } else {
              this.props.history.push(ROUTES.HOLDING)
            }
          },
          () => this.props.history.push(ROUTES.SIGN_IN)
        );
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
      <form onSubmit={this.onSubmit}>
        <Form.Label>Email Address</Form.Label>
        <br />
        <input
          className='p-1'
          style={{ width: '30rem' }}
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <br /><br />
        <Form.Label>Password</Form.Label>
        <br />
        <input
          className="p-1"
          style={{ width: '30rem' }}
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <br /><br />
        <Button style={{ width: '30rem' }} disabled={isInvalid} type="submit" variant="primary">
          Sign In
        </Button>
        <br /><br />
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInButton = () => (
  <Link to={ROUTES.SIGN_IN}>
    <Button variant="outline-primary" className='m-1'>Sign In</Button>
  </Link>
);

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm, SignInButton };

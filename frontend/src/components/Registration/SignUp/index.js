import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import { agreeTextTOS } from 'components/Legal/Terms';
import SignInLink from 'components/User/Account/SignIn/SignInLink';

import { withFirebase } from 'api/Firebase';
import { withUser } from 'api/Session';
import * as CONDITIONS from 'constants/conditions';
import * as ROUTES from 'constants/routes';
import { validateCreateUser } from 'utils/validation';

const SignUpPage = () => (
  <Container>
    <Card className='mt-4 mb-4'>
      <Card.Body>
        <Card.Title>Sign Up</Card.Title>
        <hr />
        <SignUpForm />
        <hr />
        <SignInLink />
      </Card.Body>
    </Card>
  </Container>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  agreeTOS: false,
  errors: [],
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    event.preventDefault();

    const errors = validateCreateUser(email);
    this.setState({ errors });
    if (errors.length > 0) {
      return;
    }

    if (CONDITIONS.isSignedInAnonUser(this.props.authUser)) {
      const anonAuthUser = this.props.authUser;
      this.props.firebase
        .doLinkWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          anonAuthUser.username = username;
          anonAuthUser.email = email;
          anonAuthUser.isAnon = false;

          return this.props.firebase
            .user(authUser.user.uid)
            .set({
              ...anonAuthUser
            });
        })
        .then(() => {
          this.setState({ ...INITIAL_STATE });
          if (CONDITIONS.isSignedInCompleteUser(anonAuthUser)) {
            this.props.history.push(ROUTES.CONFIRMATION);
          } else {
            this.props.history.push(ROUTES.CHOOSE_DEALER);
          }
        })
        .catch(error => {
          this.setState({ error });
        });
    } else {
      this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          return this.props.firebase
            .user(authUser.user.uid)
            .set({
              uid: authUser.user.uid,
              username,
              email
            });
        })
        .then(() => {
          this.setState({ ...INITIAL_STATE });
          this.props.history.push(ROUTES.CHOOSE_DEALER);
        })
        .catch(error => {
          this.setState({ error });
        });
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      agreeTOS,
      errors,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '' ||
      agreeTOS === false;

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Row>
          <Form.Group className='col-md-12 col-lg-6'>
            <Form.Label>Nickname</Form.Label>
            <Form.Control
              name='username'
              value={username}
              onChange={this.onChange}
              type='text'
              placeholder='Nickname'
            />
          </Form.Group>
          <Form.Group className='col-md-12 col-lg-6'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              name='email'
              value={email}
              onChange={this.onChange}
              type='text'
              placeholder='Email Address'
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group className='col-md-6'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name='passwordOne'
              value={passwordOne}
              onChange={this.onChange}
              type='password'
              placeholder='Password'
            />
          </Form.Group>
          <Form.Group className='col-md-6'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name='passwordTwo'
              value={passwordTwo}
              onChange={this.onChange}
              type='password'
              placeholder='Confirm Password'
            />
          </Form.Group>
        </Form.Row>
        <br />
        <Form.Row>
          <Form.Group className='col-12'>
            <Form.Check
              name='agreeTOS'
              checked={agreeTOS}
              onChange={this.onChangeCheckbox}
              type='checkbox'
              label={agreeTextTOS}
            />
          </Form.Group>
        </Form.Row>
        <Button disabled={isInvalid} type='submit'>
          Sign Up
        </Button>
        <br /><br />
        {errors.map((error, index) => <p key={index}>{error}</p>)}
        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}

const SignUpForm = compose(
  withUser,
  withRouter,
  withFirebase,
)(SignUpFormBase);

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP} style={{textDecoration: 'none'}}>
      Sign up!
    </Link>
  </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };

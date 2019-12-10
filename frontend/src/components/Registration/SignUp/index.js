import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'styled/Container';

import { agreeTextTOS } from 'components/Legal/Terms';
import SignInLink from 'components/User/SignInLink';

import { withFirebase } from 'api/Firebase';
import * as ROUTES from 'constants/routes';
import { validateCreateUser } from 'utils/validation';

const SignUpPage = () => (
  <Container>
    <Card>
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
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              name='username'
              value={username}
              onChange={this.onChange}
              type='text'
              placeholder='Full Name'
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
  withRouter,
  withFirebase,
)(SignUpFormBase);

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP} style={{textDecoration: 'none'}}>
      Sign Up!
    </Link>
  </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };

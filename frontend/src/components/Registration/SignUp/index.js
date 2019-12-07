import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'styled/Container';

import { withFirebase } from 'api/Firebase';
import * as ROUTES from 'constants/routes';
import * as ROLES from 'constants/roles';

const SignUpPage = () => (
  <Container>
    <Card>
      <Card.Header>Sign Up</Card.Header>
      <Card.Body>
        <SignUpForm />
      </Card.Body>
    </Card>
  </Container>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  isApproved: false,
  isDev: false,
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne, isAdmin, isApproved, isDev } = this.state;

    const roles = {};
    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }
    if (isApproved) {
      roles[ROLES.APPROVED] = ROLES.APPROVED;
    }
    if (isDev) {
      roles[ROLES.DEV] = ROLES.DEV;
    }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
            roles
          });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        if (isApproved) {
          this.props.history.push(ROUTES.CONFIRMATION);
        } else {
          this.props.history.push(ROUTES.CONTRACT);
        }
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
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
      isAdmin,
      isApproved,
      isDev,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Row>
          <Form.Group className='col-md-6'>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              name='username'
              value={username}
              onChange={this.onChange}
              type='text'
              placeholder='Full Name'
            />
          </Form.Group>
          <Form.Group className='col-md-6'>
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
        <Form.Row>
          <Form.Group className='col-3'>
            <Form.Check
              name='isAdmin'
              checked={isAdmin}
              onChange={this.onChangeCheckbox}
              type='checkbox'
              label='Admin'
            />
          </Form.Group>
          <Form.Group className='col-3'>
            <Form.Check
              name='isApproved'
              checked={isApproved}
              onChange={this.onChangeCheckbox}
              type='checkbox'
              label='Approved'
            />
          </Form.Group>
          <Form.Group className='col-3'>
            <Form.Check
              name='isDev'
              checked={isDev}
              onChange={this.onChangeCheckbox}
              type='checkbox'
              label='Dev'
            />
          </Form.Group>
        </Form.Row>
        <Button disabled={isInvalid} type='submit'>
          Sign Up
        </Button>
        <br /><br />
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
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up!</Link>
  </p>
);

const JoinNowButton = () => (
  <Link to={ROUTES.SIGN_UP}>
    <Button variant="primary" className="m-2">Join Now</Button>
  </Link>
);

export default SignUpPage;

export { SignUpForm, SignUpLink, JoinNowButton };

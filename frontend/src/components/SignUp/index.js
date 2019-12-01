import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Button from 'react-bootstrap/Button';
import {Card, Container, Form, Jumbotron} from 'react-bootstrap';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const SignUpPage = () => (
  <Container>
    <br />
    <Card style={{ width: '36rem' }}>
      <Card.Header as='h4' className='p-auto'>Sign Up</Card.Header>
      <Card.Body className="m-auto">
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
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne, isAdmin, isApproved } = this.state;

    const roles = {};

    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }
    if (isApproved) {
      roles[ROLES.APPROVED] = ROLES.APPROVED;
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
          this.props.history.push(ROUTES.DRIVE);
        } else {
          this.props.history.push(ROUTES.HOLDING);
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
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <Form.Label>Full Name</Form.Label>
        <br />
        <input
          className='p-1'
          style={{ width: '30rem' }}
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <br /><br />
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
          className='p-1'
          style={{ width: '30rem' }}
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <br /><br />
        <Form.Label>Confirm Password</Form.Label>
        <br />
        <input
          className='p-1'
          style={{ width: '30rem' }}
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <br /><br />
        <Form.Label>Admin:&nbsp;</Form.Label>
          <input
            name="isAdmin"
            checked={isAdmin}
            onChange={this.onChangeCheckbox}
            type="checkbox"
          />
        <Form.Label>&nbsp;&nbsp;&nbsp;Approved:&nbsp;</Form.Label>
          <input
            name="isApproved"
            checked={isApproved}
            onChange={this.onChangeCheckbox}
            type="checkbox"
          />
          <br /><br />
        <Button disabled={isInvalid} type="submit">
          Sign Up
        </Button>

        {error && <p>{error.message}</p>}
      </form>
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

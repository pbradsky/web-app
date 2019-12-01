import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, Container, Form } from 'react-bootstrap';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const PasswordForgetPage = () => (
  <Container>
    <br />
    <Card style={{ width: '36rem' }}>
      <Card.Header as='h4' className='p-auto'>Forgot your password?</Card.Header>
      <Card.Body className='m-auto'>
        <PasswordForgetForm />
      </Card.Body>
    </Card>
  </Container>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <Form.Label>Email Address</Form.Label>
        <br />
        <input
          className='p-1'
          style={{ width: '30rem' }}
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <br /><br />
        <Button disabled={isInvalid} type="submit">
          Reset My Password
        </Button>
        <br /><br />
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
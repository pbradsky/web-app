import React, { Component } from 'react';
import { compose } from 'recompose';

import { withAuthorization, AuthUserContext } from '../Session';
import { withFirebase } from '../Firebase';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import * as CONDITIONS from '../../constants/conditions';

const INITIAL_STATE = {
  email: '',
  error: null,
};

const DeleteAccountCard = props => (
  <Card>
    <Card.Header>Delete Account</Card.Header>
    <Card.Body>
      <DeleteAccountForm {...props} />
    </Card.Body>
  </Card>
);

class DeleteAccountForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    this.props.firebase
      .doAccountDelete()
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

    const isInvalid = authUser => authUser.email !== email;

    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <Form onSubmit={this.onSubmit}>
            <Form.Label>Confirm Email</Form.Label>
            <Form.Control
              name='email'
              value={email}
              onChange={this.onChange}
              type='email'
              placeholder='Email Address'
            />
            <br />
            <Button disabled={isInvalid(authUser)} type='submit'>
              Delete Account
            </Button>
            <br />
            {error && <p>{error.message}</p>}
          </Form>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default compose(
  withAuthorization(CONDITIONS.isSignedInUser),
  withFirebase
)(DeleteAccountCard);
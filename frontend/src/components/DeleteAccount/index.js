import React, { Component } from 'react';
import { compose } from 'recompose';

import { withAuthorization, AuthUserContext } from '../Session';
import { withFirebase } from '../Firebase';
import { Form, Button, Card } from 'react-bootstrap';

import * as CONDITIONS from '../../constants/conditions';

const INITIAL_STATE = {
  email: '',
  error: null,
};

const DeleteAccountCard = props => (
  <Card style={{width: '36rem'}}>
    <Card.Header as='h4' className='p-auto'>Delete Account</Card.Header>
    <Card.Body className='m-auto'>
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
          <form onSubmit={this.onSubmit}>
            <Form.Label>Confirm Email</Form.Label>
            <br />
            <input
              className='p-1'
              style={{ width: '30rem' }}
              name="email"
              value={email}
              onChange={this.onChange}
              type="email"
              placeholder="Email Address"
            />
            <br /><br />
            <Button disabled={isInvalid(authUser)} type="submit">
              Delete Account
            </Button>
            <br /><br />
            {error && <p>{error.message}</p>}
          </form>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default compose(
  withAuthorization(CONDITIONS.isSignedInUser),
  withFirebase
)(DeleteAccountCard);
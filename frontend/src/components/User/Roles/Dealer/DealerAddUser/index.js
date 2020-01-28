import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import FormGroup from 'Contract/Util/FormGroup';

import * as CONDITIONS from 'constants/conditions';
import * as ROUTES from 'constants/routes';
import { validateCreateUser } from 'utils/validation';

const AddUserPage = () => (
  <Container>
    <Card className='mt-4 mb-4'>
      <Card.Body>
        <Card.Title>Sign Up</Card.Title>
        <hr />
        <AddUserForm />
      </Card.Body>
    </Card>
  </Container>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  role: '',
  errors: [],
  error: null,
};

class AddUserForm extends Component {
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
              email,
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
      role,
      errors,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      role === '' ||
      username === '' ||
      agreeTOS === false;

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Row>
          <FormGroup
            className='col-md-9'
            required
            validated={validated}
            label='Nickname'
            name='nickname'
            value=''
            onChange={onChangeForm}
            placeholder='Nickname'
          />
          <Form.Group className='col-md-3'>
            <Form.Label>User Role</Form.Label>
            <Form.Control
              name='role'
              value={role}
              onChange={this.onChange}
              as='select'
            >
              <option>Sales</option>
              <option>Service</option>
            </Form.Control>
          </Form.Group>
          <FormGroup
            className='col-md-12'
            required
            validated={validated}
            label='Email'
            name='email'
            value=''
            onChange={onChangeForm}
            placeholder='Email Address'
          />
          <Form.Group className='col-md-12'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              name='email'
              required
              validated={validated}
              value={email}
              onChange={this.onChange}
              type='text'
              placeholder='Email Address'
            />
          </Form.Group>
        </Form.Row>
        <Button disabled={isInvalid} type='submit'>
          Add User
        </Button>
        <br /><br />
        {errors.map((error, index) => <p key={index}>{error}</p>)}
        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}

export default AddUserPage;
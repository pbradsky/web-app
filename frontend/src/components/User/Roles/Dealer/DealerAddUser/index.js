import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import FormGroup from 'components/Registration/Contract/Util/FormGroup';

class AddUserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      role: '',
      validated: false,
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = event => {
    event.preventDefault();

    const form = event.target;
    if (form.checkValidity() === false) {
      this.setState({
        validated: true,
      });
      return;
    }

    console.log('submitted!');
  }

  render() {
    const { username, email, role, validated } = this.state;

    return (
      <Container>
        <Card className='mt-4 mb-4'>
          <Card.Body>
            <Card.Title>Sign Up</Card.Title>
            <Form id='form' noValidate onSubmit={this.onSubmit}>
              <Form.Row>
                <FormGroup
                  className='col-md-9'
                  required
                  validated={validated}
                  label='Nickname'
                  name='username'
                  value={username}
                  onChange={this.onChange}
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
                  value={email}
                  onChange={this.onChange}
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
              <Button
                variant='primary'
                form='form'
                type='submit'>
                Add User
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default AddUserPage;
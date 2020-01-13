import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import * as ROUTES from 'constants/routes';

const ContactPage = () => (
  <Container>
    <Card>
      <Card.Body>
        <Card.Title>Contact Us</Card.Title>
        <ContactForm />
      </Card.Body>
    </Card>
  </Container>
);

const ContactUsButton = () => (
  <Link to={ROUTES.CONTACT}>
    <Button variant='outline-primary'>
      Contact Us
    </Button>
  </Link>
);

const INITIAL_STATE = {
  name: '',
  email: '',
  message: '',
};

class ContactFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { name, message } = this.state;

    const subject = `Contact from ${name}`;

    window.open(`mailto:david@thejurne.com?subject=${subject}&body=${message}`);

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, email, message } = this.state;

    const isInvalid =
      name === '' ||
      email === '' ||
      message.length > 500;

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            name='name'
            value={name}
            onChange={this.onChange}
            type='text'
            placeholder='Full Name'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            name='email'
            value={email}
            onChange={this.onChange}
            type='text'
            placeholder='Email Address'
          />
        </Form.Group>
        <Form.Group>
        <Form.Label>Message</Form.Label>
          <Form.Control
            name='message'
            value={message}
            onChange={this.onChange}
            type='text'
            placeholder='Message (500 character limit)'
            as='textarea'
            rows='3'
          />
        </Form.Group>
        <Button disabled={isInvalid} type='submit'>
          Send
        </Button>
      </Form>
    );
  }
}

const ContactForm = withRouter(ContactFormBase);

export default ContactPage;
export { ContactUsButton };

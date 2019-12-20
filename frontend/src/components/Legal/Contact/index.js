import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'styled/Container';
import Form from 'react-bootstrap/Form';

import * as ROUTES from 'constants/routes';

const ContactPage = () => (
  <Container>
    <Card>
      <Card.Body>
        <Card.Title>Contact Us</Card.Title>
        <hr />
        <ContactForm />
      </Card.Body>
    </Card>
  </Container>
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
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          name='name'
          value={name}
          onChange={this.onChange}
          type='text'
          placeholder='Full Name'
        />
        <br />
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          name='email'
          value={email}
          onChange={this.onChange}
          type='text'
          placeholder='Email Address'
        />
        <br />
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
        <br />
        <Button disabled={isInvalid} type='submit'>
          Send
        </Button>
      </Form>
    )
  }
}

const ContactUsButton = () => (
  <Link to={ROUTES.CONTACT}>
    <Button variant='outline-primary'>
      Contact Us
    </Button>
  </Link>
);

const ContactCard = () => (
  <Card>
    <Card.Body>
      <Card.Title>Reach out</Card.Title>
      <hr />
      <Card.Text>
        If you have feedback,
        click the button below to get in touch.
      </Card.Text>
      <Card.Text>
        We're here to listen.
      </Card.Text>
      <ContactUsButton />
    </Card.Body>
  </Card>
);

const ContactForm = withRouter(ContactFormBase);

export default ContactPage;
export { ContactCard };

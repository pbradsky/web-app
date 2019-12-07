import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'styled/Container';
import Form from 'react-bootstrap/Form';

const ContactPage = () => (
  <Container>
    <Card>
      <Card.Header>Contact Us</Card.Header>
      <Card.Body>
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
          name="name"
          value={name}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <br />
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <br />
        <Form.Label>Message</Form.Label>
        <Form.Control
          name="message"
          value={message}
          onChange={this.onChange}
          type="text"
          placeholder="Message (500 character limit)"
          as='textarea'
          rows='3'
        />
        <br />
        <Button disabled={isInvalid} type="submit">
          Send
        </Button>
      </Form>
    )
  }
}

const ContactForm = withRouter(ContactFormBase);

export default ContactPage;

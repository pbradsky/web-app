import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from '../../styled/Container';

const ContactPage = () => (
  <Container>
    <Card>
      <Card.Header as='h4' className='p-auto'>Contact Us</Card.Header>
      <Card.Body className='m-auto'>
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
        <br />
        <Form.Control
          className='p-1'
          name="name"
          value={name}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
          as='input'
        />
        <br />
        <Form.Label>Email Address</Form.Label>
        <br />
        <Form.Control
          className='p-1'
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          as='input'
        />
        <br />
        <Form.Label>Message</Form.Label>
        <br />
        <Form.Control
          className='p-1'
          name="message"
          value={message}
          onChange={this.onChange}
          type="text"
          placeholder="Message (500 character limit)"
          as='textarea'
          rows='3'
        />
        <br />
        <Button disabled={isInvalid} type="submit" style={{ width: '30rem' }}>
          Send
        </Button>
      </Form>
    )
  }
}

const ContactForm = withRouter(ContactFormBase);

export default ContactPage;

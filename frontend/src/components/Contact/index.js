import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Button, Card, Form } from 'react-bootstrap';
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
      <form onSubmit={this.onSubmit}>
        <Form.Label>Full Name</Form.Label>
        <br />
        <input
          className='p-1'
          style={{ width: '30rem' }}
          name="name"
          value={name}
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
        <Form.Label>Message</Form.Label>
        <br />
        <input
          className='p-1'
          style={{ width: '30rem' }}
          name="message"
          value={message}
          onChange={this.onChange}
          type="text"
          placeholder="Message (500 character limit)"
        />
        <br /><br />
        <Button disabled={isInvalid} type="submit" style={{ width: '30rem' }}>
          Send
        </Button>
      </form>
    )
  }
}

const ContactForm = withRouter(ContactFormBase);

export default ContactPage;

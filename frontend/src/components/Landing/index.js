import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'styled/Container';
import JumboButton from 'styled/JumboButton';
import Jumbotron from 'react-bootstrap/Jumbotron';

import jumboimage from 'assets/jumbo.jpg';

import * as ROUTES from 'constants/routes';




const Landing = () => (
  <Container>
    <Jumbotron style={{ backgroundImage: `url(${jumboimage})`, backgroundSize: 'cover' }}>
      <h1 style={{color: 'white'}}>Your drive starts here</h1>
      <p style={{color: 'white'}}>Time is precious. Why waste it at a desk?</p>
      <hr className='col-6' style={{float: 'left', borderColor: 'white'}} />
      <br /><br />
      <Link to={ROUTES.SIGN_UP}><JumboButton variant='outline-light' size='xl'>JOIN NOW</JumboButton></Link>
    </Jumbotron>
    <CardDeck>
      <Card>
        <Card.Body>
          <Card.Title style={{color: '#27A745'}}>Reach out</Card.Title>
          <hr />
          <Card.Text>
            If you have feedback,
            click the button below to get in touch.
          </Card.Text>
          <Card.Text>
            We're here to listen.
          </Card.Text>
          <Link to={ROUTES.CONTACT} style={{textDecoration: 'none'}}><Button block variant='outline-success'>Contact Us</Button></Link>
        </Card.Body>
      </Card>
    </CardDeck>
  </Container>
);

export default Landing;
import React from 'react';

import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'styled/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { ContactCard } from '../Legal/Contact';


const LandingJumbotron = () => (
  <Jumbotron>
    <h1>Your drive starts here</h1>
    <p>Time is precious. Why waste it at a desk?</p>
  </Jumbotron>
);

const Landing = () => (
  <Container>
    <LandingJumbotron />
    <CardDeck>
      <ContactCard />
    </CardDeck>
  </Container>
);

export default Landing;
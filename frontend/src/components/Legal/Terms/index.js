import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Container from 'styled/Container';

import * as ROUTES from 'constants/routes';

const agreeTextTOS = (
  <Card.Text>
    I agree to the <Link to={ROUTES.TERMS} style={{textDecoration: 'none'}}>Terms of Service</Link> and <Link to={ROUTES.TERMS} style={{textDecoration: 'none'}}>Privacy Policy</Link>.
  </Card.Text>
);

const TermsPage = () => (
  <Container>
    <Card>
      <Card.Body>
        <Card.Title>Terms of Service</Card.Title>
        <hr />
        <Card.Text>Here are our terms of service.</Card.Text>
      </Card.Body>
    </Card>
  </Container>
);

export { agreeTextTOS };
export default TermsPage;
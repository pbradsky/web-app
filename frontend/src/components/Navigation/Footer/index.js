import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';

import * as ROUTES from 'constants/routes';

const copyright = '\u00a9';

<<<<<<< HEAD
const Styles = styled.div`
  .navbar {
    justify-content: center;
    background-color: #ffffff;
    flex-shrink: 0;
  }

  p {
    font-size: 10px;
    color: #7f7f7f;
    margin: 8px 8px 8px 8px;
  }
`

const FooterLink = styled(Link)`
  font-size: 10px;
  color: #7f7f7f;
  text-decoration: none;
  margin: 8px 8px 8px 8px;

  &:hover {
    text-decoration: none;
    color: #cccccc
  }
`

const Footer = () => (
  <Styles>
    <Navbar>
      <FooterLink to={ROUTES.TERMS}>Terms</FooterLink>
      <FooterLink to={ROUTES.PRIVACY}>Privacy</FooterLink>
      <FooterLink to={ROUTES.CONTACT}>Contact</FooterLink>
      <p>{copyright} {new Date().getFullYear()} Jurne Inc.</p>
    </Navbar>
  </Styles>
=======
const Footer = () => (
  <Navbar bg='white' style={{justifyContent: 'center'}}>
    <Link className='nav-link'
          style={{fontSize: '10px', color: '#7f7f7f'}}
          to={ROUTES.TERMS}>
      Terms
    </Link>
    <Link className='nav-link'
          style={{fontSize: '10px', color: '#7f7f7f'}}
          to={ROUTES.PRIVACY}>
      Privacy
    </Link>
    <Link className='nav-link'
          style={{fontSize: '10px', color: '#7f7f7f'}}
          to={ROUTES.CONTACT}>
      Contact
    </Link>
    <Navbar.Text className='nav-link'
          style={{fontSize: '10px'}}>
      {copyright} {new Date().getFullYear()} Jurne Inc.
    </Navbar.Text>
  </Navbar>
>>>>>>> 58b31cea6c5a925411ef6ed819e0d936fb8520df
);

export default Footer;
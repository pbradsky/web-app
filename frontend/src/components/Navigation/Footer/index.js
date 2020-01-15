import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';

import styled from 'styled-components';
import * as ROUTES from 'constants/routes';

const copyright = '\u00a9';
const currentYear = new Date().getFullYear();

const StyleWrapper = styled.div`
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
`;

const FooterLink = styled(Link)`
  font-size: 10px;
  color: #7f7f7f;
  text-decoration: none;
  margin: 8px 8px 8px 8px;

  &:hover {
    text-decoration: none;
    color: #cccccc
  }
`;

const Footer = () => (
  <StyleWrapper>
    <Navbar>
      <FooterLink to={ROUTES.ABOUT}>About</FooterLink>
      <FooterLink to={ROUTES.TERMS}>Terms</FooterLink>
      <FooterLink to={ROUTES.PRIVACY}>Privacy</FooterLink>
      <FooterLink to={ROUTES.CONTACT}>Contact</FooterLink>
      <p>{copyright} {currentYear} Jurne Inc.</p>
    </Navbar>
  </StyleWrapper>
);

export default Footer;
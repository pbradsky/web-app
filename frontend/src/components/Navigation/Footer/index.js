import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';

import * as ROUTES from 'constants/routes';

const copyright = '\u00a9';

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
      {copyright} 2020 Jurne Inc.
    </Navbar.Text>
  </Navbar>
);

export default Footer;
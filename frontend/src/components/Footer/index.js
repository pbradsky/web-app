import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';

import * as ROUTES from '../../constants/routes';

const copyright = '\u00a9';

const Footer = () => (
  <Navbar bg='white' className='border-top mt-5'>
    <Link className='nav-link'
          to={ROUTES.TERMS}>
      Terms
    </Link>
    <Link className='nav-link'
          to={ROUTES.PRIVACY}>
      Privacy
    </Link>
    <Navbar.Text className='ml-auto mr-auto'
                 style={{fontSize: '10px'}}>
      {copyright} 2019 Jurne Inc. All Rights Reserved
    </Navbar.Text>
  </Navbar>
);

export default Footer;
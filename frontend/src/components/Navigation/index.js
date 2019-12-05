import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';

import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <NavigationAuth authUser={authUser} />
        ) : (
          <NavigationNonAuth />
        )
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = ({ authUser }) => (
  <Navbar collapseOnSelect
    className='border-bottom mb-4'
    expand='none'
    style={{ backgroundColor: '#ffffff' }}>
    <Link to={ROUTES.LANDING}>
      <img src='spread.png'
           height='50'
           alt='jurne logo'
      />
    </Link>
    <Navbar.Toggle
      style={{ border: '0px', outline: 'none' }}
    />
    <Navbar.Collapse>
      <Nav>
        <Nav.Link href='#' as={Link}
              to={ROUTES.LANDING}>
          Home
        </Nav.Link>
        {!!authUser.roles[ROLES.ADMIN] && (
          <Nav.Link href='#' as={Link}
                to={ROUTES.ADMIN}>
            Admin
          </Nav.Link>
        )}
        <Nav.Link href='#' as={Link}
              to={ROUTES.ACCOUNT}>
          Account
        </Nav.Link>
        <SignOutButton />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const NavigationNonAuth = () => (
  <Navbar collapseOnSelect
          expand='none'
          className='border-bottom mb-4'
          style={{ backgroundColor: '#ffffff' }}>
    <Link to={ROUTES.LANDING}>
      <img src='spread.png'
           height='50'
           alt='jurne logo'
      />
    </Link>
    <Navbar.Toggle
      aria-controls='responsive-navbar-nav'
      style={{ border: '0px', outline: 'none' }}
    />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        <Nav.Link href='#' as={Link}
              to={ROUTES.LANDING}>
          Home
        </Nav.Link>
        <Nav.Link href='#' as={Link}
              to={ROUTES.SIGN_IN}>
          Sign In
        </Nav.Link>
        <Nav.Link href='#' as={Link}
              to={ROUTES.SIGN_UP}>
          Join Now
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
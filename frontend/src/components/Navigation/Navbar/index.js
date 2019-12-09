import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLinkRoute from './navLinkRoute';
import SignOutButton from 'components/User/SignOut';

import Spread from 'assets/spread.png'

import { AuthUserContext } from 'api/Session';
import * as ROUTES from 'constants/routes';
import * as CONDITIONS from 'constants/conditions';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, true);
  }

  setNav = isExpanded => {
    this.setState({ isExpanded });
  }

  closeNav = () => {
    this.setState({
      isExpanded: false,
    });
  }

  handleDocumentClick = event => {
    if (this._element.contains(event.target)) {
      return;
    }

    this.closeNav();
  }

  render() {
    const { isExpanded } = this.state;

    return (
      <div ref={c => this._element = c}>
        <AuthUserContext.Consumer>
          {authUser =>
            <NavContent
              authUser={authUser}
              setNav={this.setNav}
              closeNav={this.closeNav}
              isExpanded={isExpanded} />}
        </AuthUserContext.Consumer>
      </div>
    );
  }
}

const NavContent = ({ authUser, setNav, closeNav, isExpanded }) => (
  <Navbar
    collapseOnSelect
    className='border-bottom mb-4'
    expand='none'
    fixed='top'
    style={{ backgroundColor: '#ffffff' }}
    expanded={isExpanded}
    onToggle={setNav}
  >
    <Link to={ROUTES.LANDING}>
      <img
        src={Spread}
        height='50'
        alt='jurne logo'
      />
    </Link>
    <Navbar.Toggle
      aria-controls='responsive-navbar-nav'
      style={{ border: '0px', outline: 'none' }}
    />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <NavLinks closeNav={closeNav} authUser={authUser} />
    </Navbar.Collapse>
  </Navbar>
);

const NavLinks = ({ authUser, closeNav }) => {
  const isSignedIn = CONDITIONS.isSignedInUser(authUser);
  const isAdmin = CONDITIONS.isSignedInAdmin(authUser);
  const isDev = CONDITIONS.isSignedInDev(authUser);

  return (
    <Nav>
      <NavLinkRoute to={ROUTES.LANDING} onClick={closeNav}>
        Home
      </NavLinkRoute>
      <NavLinkRoute to={ROUTES.CHOOSE_DEALER} onClick={closeNav} show={isSignedIn}>
        Dealerships
      </NavLinkRoute>
      <NavLinkRoute to={ROUTES.DEALER} onClick={closeNav} show={isAdmin}>
        Dealer Dashboard
      </NavLinkRoute>
      <NavLinkRoute to={ROUTES.DEV} onClick={closeNav} show={isDev}>
        Dev Dashboard
      </NavLinkRoute>
      <NavLinkRoute to={ROUTES.ACCOUNT} onClick={closeNav} show={isSignedIn}>
        Account
      </NavLinkRoute>
      <NavLinkRoute to={ROUTES.SIGN_IN} onClick={closeNav} show={!isSignedIn}>
        Sign In
      </NavLinkRoute>
      <NavLinkRoute to={ROUTES.SIGN_UP} onClick={closeNav} show={!isSignedIn}>
        Join Now
      </NavLinkRoute>
      {isSignedIn && <SignOutButton onClick={closeNav} />}
    </Nav>
  );
}

export default Navigation;
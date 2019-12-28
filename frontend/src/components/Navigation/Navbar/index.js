import React, { Component, createRef, forwardRef } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLinkRoute from './navLinkRoute';
import SignOutButton from 'components/User/SignOut';
import Badge from 'react-bootstrap/Badge';

import Spread from 'assets/spread.png'

import { AuthUserContext } from 'api/Session';
import * as ROUTES from 'constants/routes';
import * as CONDITIONS from 'constants/conditions';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this._toggleComponentRef = createRef();
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
    // Do not toggle again if the <Navbar.Toggle /> is clicked.
    if (this._toggleComponentRef.current.contains(event.target)) {
      return;
    }

    this.closeNav();
  }

  render() {
    const { isExpanded } = this.state;

    return (
      <AuthUserContext.Consumer>
        {authUser =>
          <NavContent
            authUser={authUser}
            setNav={this.setNav}
            isExpanded={isExpanded}
            ref={this._toggleComponentRef} />}
      </AuthUserContext.Consumer>
    );
  }
}

const NavContent = forwardRef(({ authUser, setNav, isExpanded }, ref) => (
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
    <NavName authUser={authUser}/>
    <Navbar.Toggle
      ref={ref}
      aria-controls='responsive-navbar-nav'
      style={{ border: '0px', outline: 'none' }}
    />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <NavLinks authUser={authUser} />
    </Navbar.Collapse>
  </Navbar>
));

const NavName = ({authUser}) => {
  const isSignedIn = CONDITIONS.isSignedInKnownUser(authUser);
  return (
    isSignedIn
      ? <Badge className="ml-auto mr-3 p-2" variant='primary'> {authUser.username} </Badge>
      : <Link to={ROUTES.SIGN_UP} className='ml-auto mr-3'><Button size='sm'>Join Now</Button></Link>

  )
}

const NavLinks = ({ authUser }) => {
  const isSignedIn = CONDITIONS.isSignedInKnownUser(authUser);
  const isAdmin = CONDITIONS.isSignedInAdmin(authUser);
  const isDealer = CONDITIONS.isSignedInDealer(authUser);

  return (
    <Nav>
      <NavLinkRoute to={ROUTES.LANDING} >
        Home
      </NavLinkRoute>
      <NavLinkRoute to={ROUTES.CHOOSE_DEALER} show={isSignedIn && !isAdmin && !isDealer}>
        Dealerships
      </NavLinkRoute>
      <NavLinkRoute to={ROUTES.DEALER} show={isDealer}>
        Dashboard
      </NavLinkRoute>
      <NavLinkRoute to={ROUTES.ADMIN} show={isAdmin}>
        Dashboard
      </NavLinkRoute>
      <NavLinkRoute to={ROUTES.ACCOUNT} show={isSignedIn}>
        Account
      </NavLinkRoute>
      <NavLinkRoute to={ROUTES.SIGN_IN} show={!isSignedIn}>
        Sign In
      </NavLinkRoute>
      <NavLinkRoute to={ROUTES.SIGN_UP} show={!isSignedIn}>
        Join Now
      </NavLinkRoute>
      {isSignedIn && <SignOutButton />}
    </Nav>
  );
}

export default Navigation;
import React, { Component, createRef, forwardRef } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLinkRoute from './navLinkRoute';
import SignOutButton from 'components/User/SignOut';

import Spread from 'assets/spread.png';
import styled from 'styled-components';

import { AuthUserContext } from 'api/Session';
import * as ROUTES from 'constants/routes';
import * as CONDITIONS from 'constants/conditions';

const Hamburger = styled(Navbar.Toggle)`
  border: 0px;
  outline: none!important;
`;

const StyledUserBadge = styled(Button)`
  line-height: 0.75em;
  border-radius: 50%;
`;

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
    expand='md'
    expanded={isExpanded}
    onToggle={setNav}
    id='navbar-state'
  >
    <Link to={ROUTES.LANDING}><img src={Spread} height='54' alt='jurne logo' /></Link>
    <UserBadge authUser={authUser} linkClass='ml-auto d-md-none' />
    <Hamburger ref={ref} aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <NavLinks authUser={authUser} />
    </Navbar.Collapse>
    <UserBadge authUser={authUser} linkClass='d-none d-md-block' />
  </Navbar>
));

const UserBadge = ({authUser, linkClass}) => {
  const isSignedIn = CONDITIONS.isSignedInKnownUser(authUser);
  return (isSignedIn &&
    <Link className={linkClass} to={ROUTES.ACCOUNT}>
      <StyledUserBadge className='p-2 ml-2' size='sm'>{authUser.username[0]}</StyledUserBadge>
    </Link>
  );
}

const NavLinks = ({ authUser }) => {
  const isSignedIn = CONDITIONS.isSignedInKnownUser(authUser);
  const isAdmin = CONDITIONS.isSignedInAdmin(authUser);
  const isDealer = CONDITIONS.isSignedInDealer(authUser);

  return (
    <Nav className='ml-auto'>
      <NavLinkRoute to={ROUTES.CONTACT}>
        Contact
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
      <NavLinkRoute to={ROUTES.SIGN_IN} show={!isSignedIn}>
         Sign In
      </NavLinkRoute>
      <NavLinkRoute className='d-block d-md-none nav-link' to={ROUTES.SIGN_UP} show={!isSignedIn}>
         Join Now
      </NavLinkRoute>
      <NavLinkRoute className='d-none d-md-block' to={ROUTES.SIGN_UP} show={!isSignedIn}>
        <Button variant='primary' size='md'>
         Join Now
        </Button>
      </NavLinkRoute>
      {isSignedIn && <SignOutButton />}
    </Nav>
  );
}

export default Navigation;
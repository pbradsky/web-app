import React, { Component, createRef, forwardRef } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLinkRoute from './navLinkRoute';
import SignOutButton from 'components/User/Account/SignOut';

import Spread from 'assets/spread.png';
import styled from 'styled-components';

import { AuthUserContext } from 'api/Session';
import * as ROUTES from 'constants/routes';
import * as CONDITIONS from 'constants/conditions';

const Hamburger = styled(Navbar.Toggle)`
  border: 0px;
  outline: none!important;
`;

const StyledUserDropdown = styled(DropdownButton)`
  .dropdown-toggle {
    border-radius: 50%;
    line-height: 1.5;
  }
  .dropdown-toggle::after {
    display: none;
  }
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
    className='fixed-top'
    style={{backgroundColor: '#ffffff'}}
    collapseOnSelect
    expand='md'
    expanded={isExpanded}
    onToggle={setNav}
    id='navbar-state'
  >
    <Link to={ROUTES.LANDING}><img src={Spread} height='54' alt='jurne logo' /></Link>
    <UserDropdown authUser={authUser} linkClass='ml-auto d-md-none' />
    <Hamburger ref={ref} aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <NavLinks authUser={authUser} />
    </Navbar.Collapse>
    <UserDropdown authUser={authUser} linkClass='d-none d-md-block' />
  </Navbar>
));

const DropdownItem = ({ staticContext, ...props }) => (
  <Dropdown.Item {...props} />
);

const UserDropdown = ({authUser, linkClass}) => {
  const isSignedIn = CONDITIONS.isSignedInKnownUser(authUser);
  return (isSignedIn &&
    <StyledUserDropdown
      title={authUser.username[0]}
      className={`p-2 ml-2 ${linkClass}`}
      variant='primary'
      alignRight >
        <DropdownItem
          className='nav-link'
          as={Link}
          href='#'
          to={ROUTES.ACCOUNT}>
            Account
        </DropdownItem>
        <SignOutButton as={DropdownItem} />
    </StyledUserDropdown>
  );
}

const NavLinks = ({ authUser }) => {
  const isSignedIn = CONDITIONS.isSignedInKnownUser(authUser);
  const isSignedInComplete = CONDITIONS.isSignedInCompleteUser(authUser);
  const isSignedInRegular = CONDITIONS.isSignedInRegularUser(authUser);
  const isAdmin = CONDITIONS.isSignedInAdmin(authUser);
  const isDealer = CONDITIONS.isSignedInDealer(authUser);
  const isService = CONDITIONS.isSignedInService(authUser);

  return (
    <Nav className='ml-auto'>
      <NavLinkRoute to={ROUTES.CHOOSE_DEALER} show={isSignedInRegular}>
        Dealerships
      </NavLinkRoute>
      <NavLinkRoute to={ROUTES.DEALER_ADD_USER} show={isDealer}>
        Add User
      </NavLinkRoute>
      <NavLinkRoute to={ROUTES.ADMIN} show={isAdmin}>
        Dashboard
      </NavLinkRoute>
      <NavLinkRoute to={ROUTES.DEALER} show={isDealer}>
        Dashboard
      </NavLinkRoute>
      <NavLinkRoute to={ROUTES.SERVICE} show={isService}>
        Dashboard
      </NavLinkRoute>
      <NavLinkRoute to={ROUTES.LOANER_FLEET} show={isService}>
        Fleet
      </NavLinkRoute>
      <NavLinkRoute to={ROUTES.MY_CONTRACT} show={isSignedInComplete}>
        My Contract
      </NavLinkRoute>
      <NavLinkRoute to={ROUTES.SIGN_IN} show={!isSignedIn}>
        Sign In
      </NavLinkRoute>
      <NavLinkRoute className='d-block d-md-none nav-link' to={ROUTES.SIGN_UP} show={!isSignedIn}>
        Join Now
      </NavLinkRoute>
      <NavLinkRoute className='d-none d-md-block ml-2' to={ROUTES.SIGN_UP} show={!isSignedIn}>
        <Button variant='primary' size='md'>
          Join Now
        </Button>
      </NavLinkRoute>
    </Nav>
  );
}

export default Navigation;
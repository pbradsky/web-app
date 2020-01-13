import React, { Component, createRef, forwardRef } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
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
    fixed='top'
    height='40px'
    style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #dddddd' }}
    expanded={isExpanded}
    onToggle={setNav}
    id='navbar-state'
  >
    <Container>
      <Link to={ROUTES.LANDING}>
        <img
          src={Spread}
          height='40'
          alt='jurne logo'
        />
      </Link>
      <NavName authUser={authUser} linkClass='ml-auto d-md-none' />
      <Navbar.Toggle
        ref={ref}
        aria-controls='responsive-navbar-nav'
        style={{ border: '0px', outline: 'none' }}
      />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <NavLinks authUser={authUser} />
      </Navbar.Collapse>
      <NavName authUser={authUser} linkClass='d-none d-md-block' />
    </Container>
  </Navbar>
));

const NavName = ({authUser, linkClass}) => {
  const isSignedIn = CONDITIONS.isSignedInKnownUser(authUser);
  return (
    isSignedIn
      && <Link className={linkClass} to={ROUTES.ACCOUNT}>
          <Button className='p-2 ml-2' size='sm' style={{lineHeight: '0.75em', borderRadius: '50%'}}>{authUser.username[0]}</Button>
        </Link>
  )
}

const NavLinks = ({ authUser }) => {
  const isSignedIn = CONDITIONS.isSignedInKnownUser(authUser);
  const isAdmin = CONDITIONS.isSignedInAdmin(authUser);
  const isDealer = CONDITIONS.isSignedInDealer(authUser);

  return (
    <Nav className='ml-auto'>
      <NavLinkRoute to={ROUTES.CHOOSE_DEALER} show={isSignedIn && !isAdmin && !isDealer}>
        Dealerships
      </NavLinkRoute>
      <NavLinkRoute to={ROUTES.DEALER} show={isDealer}>
        Dashboard
      </NavLinkRoute>
      <NavLinkRoute to={ROUTES.ADMIN} show={isAdmin}>
        Dashboard
      </NavLinkRoute>
      <NavLinkRoute className='p-0 mb-1 mt-1 mr-2' to={ROUTES.SIGN_IN} show={!isSignedIn}>
        <Button className='m-0' variant='outline-primary' size='sm'>
         Sign In
        </Button>
      </NavLinkRoute>
      <NavLinkRoute className='p-0 mb-1 mt-1' to={ROUTES.SIGN_UP} show={!isSignedIn}>
        <Button className='m-0' variant='primary' size='sm'>
         Join Now
        </Button>
      </NavLinkRoute>
      {isSignedIn && <SignOutButton />}
    </Nav>
  );
}

export default Navigation;
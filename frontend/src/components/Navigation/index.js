import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';

import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { SignInButton } from '../SignIn';
import { JoinNowButton } from '../SignUp';

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
    <Navbar className='border-bottom' bg='white'>

        <Navbar.Brand>
            <Link to={ROUTES.LANDING}>
                <img
                    src="spread.png"
                    height="50"
                    alt='jurne logo'
                    className="d-inline-block align-top" />
            </Link>
        </Navbar.Brand>

        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>

        <Dropdown drop='down'>
            <Dropdown.Toggle id="dropdown-basic"></Dropdown.Toggle>

            <Dropdown.Menu style={{ right: '0', left: 'auto'}}>
                <Dropdown.Item><Link to={ROUTES.ACCOUNT}>Account</Link></Dropdown.Item>
                {!!authUser.roles[ROLES.ADMIN] && (
                <Dropdown.Item><Link to={ROUTES.ADMIN}>Admin</Link></Dropdown.Item>
                )}
                <SignOutButton />
            </Dropdown.Menu>
        </Dropdown>

    </Navbar>
);

const NavigationNonAuth = () => (
    <Navbar className="border-bottom" bg="white">

        <Navbar.Brand>
            <Link to={ROUTES.LANDING}>
                <img
                    src="spread.png"
                    height="50"
                    alt='jurne logo'
                    className="d-inline-block align-top" />
            </Link>
        </Navbar.Brand>

        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>

        <SignInButton />
        <JoinNowButton />

    </Navbar>
);

export default Navigation;
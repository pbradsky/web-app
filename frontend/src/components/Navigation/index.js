import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';

import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import { Navbar, Nav, Button } from 'react-bootstrap';
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


        {!!authUser.roles[ROLES.ADMIN] && (
                <Link to={ROUTES.ADMIN}>
                    <Button variant="outline-primary" className="m-2">Admin</Button>
                </Link>
        )}
        <SignOutButton />

        <Link className='pl-2 pr-2' to={ROUTES.ACCOUNT}>
            <img src='account.svg' alt='account' height='20px' />
        </Link>

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
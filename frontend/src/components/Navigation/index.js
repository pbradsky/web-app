import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';

import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import { Navbar, Nav } from 'react-bootstrap';
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
    <Navbar collapseOnSelect expand='md' className='border-bottom' bg='white'>
        <Link to={ROUTES.LANDING}>
            <img
                src='spread.png'
                height='50'
                alt='jurne logo'
            />
        </Link>
        <Navbar.Toggle
            aria-controls='responsive-navbar-nav'
            style={{border: '0px', outline: 'none'}}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='ml-auto'>
                    <Link
                        className='nav-link'
                        to={ROUTES.LANDING}>
                            Home
                    </Link>
                {!!authUser.roles[ROLES.ADMIN] && (
                    <Link
                        className='nav-link'
                        to={ROUTES.ADMIN}>
                            Admin
                    </Link>
                )}
                    <Link
                        className='nav-link'
                        to={ROUTES.ACCOUNT}>
                            Account
                    </Link>
                    <SignOutButton />
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

const NavigationNonAuth = () => (
    <Navbar className='border-bottom' bg='white'>
        <Link to={ROUTES.LANDING}>
            <img
                src='spread.png'
                height='50'
                alt='jurne logo'
                className='d-inline-block align-top'
            />
        </Link>
        <Nav className='ml-auto'>
            <Link
                className='nav-link'
                to={ROUTES.LANDING}>
                    Home
            </Link>
            <Link
                className='nav-link'
                to={ROUTES.SIGN_IN}>
                    Sign In
            </Link>
            <Link
                className='nav-link'
                to={ROUTES.SIGN_IN}>
                    Join Now
            </Link>
        </Nav>
    </Navbar>
);

export default Navigation;
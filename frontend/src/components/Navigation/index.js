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
    <Navbar collapseOnSelect className='border-bottom mb-5' expand='none' style={{backgroundColor: '#ffffff'}}>
        <Link to={ROUTES.LANDING}>
            <img
                src='spread.png'
                height='50'
                alt='jurne logo'
            />
        </Link>
        <Navbar.Toggle
            style={{border: '0px', outline: 'none'}}
        />
        <Navbar.Collapse>
            <Nav className='mr-auto'>
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
    <Navbar collapseOnSelect expand='none' className='border-bottom mb-5' style={{backgroundColor: '#ffffff'}}>
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
            <Nav className='mr-auto'>
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
                    to={ROUTES.SIGN_UP}>
                        Join Now
                </Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation;
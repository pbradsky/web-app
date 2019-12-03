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
    <Navbar collapseOnSelect expand='lg' className='border-bottom' bg='white'>
        <Link to={ROUTES.LANDING}>
            <img
                src='spread.png'
                height='50'
                alt='jurne logo'
            />
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' style={{border: '0px', outline: 'none'}} />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='ml-auto'>
                <Nav.Link>
                    <Link style={{textDecoration: 'none', color: 'inherit'}} to={ROUTES.LANDING}>Home</Link>
                </Nav.Link>
            {!!authUser.roles[ROLES.ADMIN] && (
                <Nav.Link>
                    <Link style={{textDecoration: 'none', color: 'inherit' }} to={ROUTES.ADMIN}>Admin</Link>
                </Nav.Link>
            )}
                <Nav.Link>
                    <Link style={{textDecoration: 'none', color: 'inherit' }} to={ROUTES.ACCOUNT}>Account</Link>
                </Nav.Link>
                <SignOutButton />
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

const NavigationNonAuth = () => (
    <Navbar className='border-bottom' bg='white'>

        <Navbar.Brand>
            <Link to={ROUTES.LANDING}>
                <img
                    src='spread.png'
                    height='50'
                    alt='jurne logo'
                    className='d-inline-block align-top'
                />
            </Link>
        </Navbar.Brand>

        <Nav className='ml-auto pr-2'>
            <Nav.Link><Link style={{textDecoration: 'none', color: 'inherit'}} to={ROUTES.LANDING}>Home</Link></Nav.Link>
        </Nav>

        <SignInButton />
        <JoinNowButton />

    </Navbar>
);

export default Navigation;
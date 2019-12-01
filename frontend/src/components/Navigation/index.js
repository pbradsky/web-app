import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';

import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import { Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

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
    <ul>
        {!!authUser.roles[ROLES.APPROVED]
            ? (
                <li>
                    <Link to={ROUTES.DRIVE}>Drive</Link>
                </li>
            )
            : (
                <li>
                    <Link to={ROUTES.HOLDING}>Holding</Link>
                </li>
            )
        }
        <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        {!!authUser.roles[ROLES.ADMIN] && (
            <li>
                <Link to={ROUTES.ADMIN}>Admin</Link>
            </li>
        )}
        <li>
            <SignOutButton />
        </li>
    </ul>
);

const NavigationNonAuth = () => (
    <Navbar>

        <Navbar.Brand href="{ROUTES.LANDING}">
            <Link to={ROUTES.LANDING}>
                <img
                    src="spread.png"
                    height="50"
                    alt="brand image"
                    className="d-inline-block align-top" />
            </Link>
        </Navbar.Brand>

        <Nav className="mr-auto">
            <Nav.Link href={ROUTES.LANDING}>Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>

    </Navbar>
);

export default Navigation;
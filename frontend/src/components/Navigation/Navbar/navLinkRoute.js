import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

const StyledNavLink = styled(Nav.Link)`
  display: flex;
  align-items: center;
`;

const NavLinkRoute = ({show, ...props}) => {
  const showLink = show == null || show;
  if (!showLink) {
    return null;
  }

  return (
    <StyledNavLink href='#' className='nav-link' as={Link} {...props}>
      {props.children}
    </StyledNavLink>
  );
}

export default NavLinkRoute;
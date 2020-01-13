import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import styled from 'styled-components';

const Styled = styled.div`
  display: flex;
  align-items: center;
`

const NavLinkRoute = ({show, ...props}) => {
  const showLink = show == null || show;
  if (!showLink) {
    return null;
  }

  return (
    <Styled>
      <Nav.Link href='#' as={Link} {...props}>
        {props.children}
      </Nav.Link>
    </Styled>
  );
}

export default NavLinkRoute;
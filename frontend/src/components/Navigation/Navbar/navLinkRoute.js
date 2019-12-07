import React from 'react';
import { Link } from 'react-router-dom';

import NavLink from 'styled/Nav';

const NavLinkRoute = ({show, ...props}) => {
  const showLink = show == null || show;
  if (!showLink) {
    return null;
  }

  return (
    <NavLink href='#' as={Link} {...props}>
      {props.children}
    </NavLink>
  );
}

export default NavLinkRoute;
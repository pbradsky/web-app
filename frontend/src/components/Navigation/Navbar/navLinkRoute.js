import React from 'react';
import { Link } from 'react-router-dom';

import NavLink from 'styled/Nav';

const NavLinkRoute = props => {
  const show = props.show == null || props.show;
  if (!show) {
    return null;
  }

  return (
    <NavLink href='#' as={Link} {...props}>
      {props.children}
    </NavLink>
  );
}

export default NavLinkRoute;
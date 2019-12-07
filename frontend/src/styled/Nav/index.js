import BootstrapNav from 'react-bootstrap/Nav';
import styled from 'styled-components';

const NavLink = styled(BootstrapNav.Link).attrs(() => ({
  className: 'nav-link',
}))`
  &&&& {
    color: #7f7f7f;
  }
`;

export default NavLink;
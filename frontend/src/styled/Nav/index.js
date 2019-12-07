import styled from 'styled-components';
import BootstrapNav from 'react-bootstrap/Nav';

const NavLink = styled(BootstrapNav.Link).attrs(() => ({
  className: 'nav-link',
}))`
  &&&& {
    color: #7f7f7f;
  }
`;

export default NavLink;
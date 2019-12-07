import styled from 'styled-components';
import BootstrapContainer from 'react-bootstrap/Container';

const navHeight = 91;
const footerHeight = 72;

const Container = styled(BootstrapContainer)`
    min-height: calc(100vh - ${navHeight + footerHeight}px);
`;

export default Container;
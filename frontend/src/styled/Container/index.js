import BootstrapContainer from 'react-bootstrap/Container';
import styled from 'styled-components';

const navHeight = 91;
const footerHeight = 72;

const Container = styled(BootstrapContainer)`
    padding-top: ${navHeight}px;
    min-height: calc(100vh - ${footerHeight}px);
`;

export default Container;
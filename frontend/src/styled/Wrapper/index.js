import styled from 'styled-components';

const footerHeight = 72;

const Container = styled.div`
    min-height: calc(100vh - ${footerHeight}px);
`;

export default Container;
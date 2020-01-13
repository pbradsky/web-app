import styled from 'styled-components';

const footerHeight = 72;

const Wrapper = styled.div`
    min-height: calc(100vh - ${footerHeight}px);
`;

export default Wrapper;
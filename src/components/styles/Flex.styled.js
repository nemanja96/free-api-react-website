import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0;

    & > div,
    & > ul {
        flex: 1;
    }

    p{
        font-size: 1.2rem;
        line-height: 1.5em;
    }
`
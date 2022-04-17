import styled from 'styled-components';

export const Button = styled.button`
display: block;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 700;
    padding: 15px 50px;
    background-color: ${({bg}) => bg || '#2369ed'};
    color: ${({color}) => color || '#fff'};
    border: 1px solid ${({color}) => color || '#2369ed'};
    transition: .4s all;

    &:hover{
        opacity: 0.7;
    }
`
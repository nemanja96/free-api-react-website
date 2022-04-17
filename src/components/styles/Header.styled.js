import styled from "styled-components";

export const StyledHeader = styled.header`
    background: ${({bg}) => bg || (({theme}) => theme.colors.header) };
    color: ${({textColor}) => textColor };
    padding: 0;

    h3{
        font-size: 0.9rem;
        color: #b4b4b4;
        position: relative;
        text-align: right;
        max-width: 150px;
        font-weight: 600;

        &:before {
            content: "";
            display: block;
            width: 20px;
            height: 2px;
            background: #b4b4b4;
            left: 0;
            top: 50%;
            position: absolute;
          }
    }

    h1{
        font-size: 3.7rem;
        padding: 0;
        margin: 0;
        color: #fff;
        font-weight: bold;
        line-height: 1.1em;
        margin-top: 10px;
        margin-bottom: 30px;
        
        em{
            font-weight: 100;
            font-family: serif;
            text-decoration: underline;
        }
    }
`

export const Nav = styled.nav`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.h2`
    margin: 0;
    padding: 0;
    color: #fff;
`

export const Image = styled.img`
    width: 80%;
    display: block;
    margin: 0 auto;
`
import styled from "styled-components";

export const StyledCard = styled.div`
    border: 1px solid ${({layout}) => layout || "#5e5e5e"};
    border-radius: 10px;
    margin: 1.56%;
    background: ${({layout}) => layout || "transparent"};
    flex: 1;
    height: fit-content;
    flex-basis: 30%;
    max-width: 30%;
`
export const CardContent = styled.div`
    padding: 15px 20px;

    p{
        color: #999;
        font-size: 0.8rem;
        line-height: 1.7em;
    }
`

export const Align = styled.div`
    display: flex;
    align-items: center;

    .icon{
        display: block;
        font-size: 1.5rem;
        margin-right: 10px;
        color: #fff;
    }

    span{
        color: #fff;
        font-weight: bold;
        font-size: 0.9rem;
    }
`

export const CardButton = styled.a`
    display: block;
    border: none;
    border-top: 1px solid ${({layout}) => layout || "#5e5e5e"};
    padding: 15px 20px;
    text-align: left;
    background: ${({btnColor}) => btnColor || "transparent"};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: #fff;
    font-size: 0.8rem;
    cursor: pointer;
    transition: .4s all;
    text-decoration: none;

    &:hover{
        background: #2369ed;
    }
`
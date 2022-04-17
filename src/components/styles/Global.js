import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        font-family: 'Poppins', sans-serif;
    }

    body{
        margin: 0;
        padding: 0;
        background: ${({theme}) => theme.colors.body};
        background-image: url(../images/back.png);
        background-repeat: repeat;
        background-attachment: fixed;
        font-family: 'Poppins', sans-serif;
    }
`

export default GlobalStyles;
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face{
    font-family: "Poppins", sans-serif;
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: inherit;
}

*{
box-sizing: border-box;
 margin: 0;
 padding: 0;
}
html{
 font-size: 16px;
 color: ${(props) => props.theme.colors.text};
 overflow-x: hidden;
 box-sizing: border-box;
 
}

body{
    background: ${(props) => props.theme.colors.background};
}

button{
    border: none;
    padding: 0;
    background: inherit;
    font-family: inherit;
    appearance:   none
}



`;

export default GlobalStyles;

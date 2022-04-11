import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: ${(props) => props.theme.colors.primary};
    transition: all ease 0.3s;
    height: 400vh;
    overflow-x: hidden;
  }
`;

// radial-gradient(#085fce, #00fff0, ${props.theme.colors.primary})

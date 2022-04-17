import { createGlobalStyle } from "styled-components";

import Background from "../assets/img/background.svg";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    transition: all ease 0.3s;
    overflow-x: hidden;
    background-color: ${(props) => props.theme.colors.primary};
  }

  main {
    background-image: ${`url(${Background})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (max-width: 1260px) {
      background-image: ${(props) =>
        `radial-gradient(circle at 95% 20%, #085fce40, ${props.theme.colors.primary} 58%)`};
        background-repeat: repeat-y;
    }
  }

  ::-webkit-scrollbar {
    background-color: ${(props) => props.theme.colors.secundary};
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: ${(props) => props.theme.colors.text};
    
  }
`;
//      ;

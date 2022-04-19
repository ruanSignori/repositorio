import styled from "styled-components";

type TextColors = {
  colorOne: string;
  colorSecund: string;
};

export const Apresentation = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 5rem 2rem;
  gap: 4rem;

  img {
    width: 500px;
    height: auto;
    vertical-align: middle;
  }

  @media (max-width: 1200px) {
    padding-top: 12rem;
    gap: 10rem;

    img {
      width: 70%;
    }
  } ;
`;

export const Emphasis = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;

  button {
    width: 11.25rem;
    border-radius: 5px;
    padding: 0.8rem 1.8rem;
    background-color: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.primary};
    font-size: 1em;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export const MainTtile = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 2.5em;
  font-weight: bold;
  text-align: left;
`;

export const TextGradient = styled.strong<TextColors>`
  font-family: "Poppins", sans-serif;
  background: ${(props) =>
    `-webkit-linear-gradient(${props.colorOne}, ${props.colorSecund})`};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Description = styled.p`
  max-width: 30rem;
  color: ${(props) => props.theme.colors.text};
  font-size: 1em;
  line-height: 24px;
`;

import styled from "styled-components";

type Props = {
  transparent: boolean;
};

export const Container = styled.header<Props>`
  width: 100vw;
  height: 80px;
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  transition: all ease 0.2s;
  background-color: ${(props) =>
    (props.transparent && "transparent") || props.theme.colors.primary};

  a {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    letter-spacing: 10%;
    font-size: 1.5em;
  }

  div {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

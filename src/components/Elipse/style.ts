import styled from "styled-components";

type PropsElipse = {
  gradient: string;
  position: string;
};

export const ElipseComponent = styled.div<PropsElipse>`
  z-index: -1;
  width: 30vw;
  height: 40vh;
  background-image: ${(props) =>
    `linear-gradient(to bottom, ${props.gradient})`};
  position: absolute;
  inset: 0;
  transform: ${(props) => `translate(${props.position})`};
`;

export const Children = styled.div`
  backdrop-filter: blur(200px);
  -webkit-backdrop-filter: blur(200px);
`;

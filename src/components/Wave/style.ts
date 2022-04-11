import styled from "styled-components";

export const WaveComponent = styled.div`
  transition: all ease 0.4s;
  svg {
    width: 100%;

    path {
      fill: ${(props) => props.theme.colors.backgroundSecundary};
    }
  }
`;

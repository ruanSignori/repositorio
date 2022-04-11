import styled from "styled-components";

export const About = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  article {
    width: 100%;
    height: 100%;
    padding: 5rem 8rem;
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.backgroundSecundary};

    div {
      display: flex;
      justify-content: space-between;
      gap: 2.5rem;

      div {
        margin-top: 2.5rem;
        display: flex;
        flex-direction: column;
        gap: 2.5rem;

        p {
          width: 38rem;
          font-size: 1.2em;
          line-height: 42px;
        }
      }
    }
  }
`;

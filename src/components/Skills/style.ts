import styled from "styled-components";

export const SkillsContent = styled.div`
  min-height: 100vh;
  margin-bottom: 5rem;
  padding: 5rem 8rem;

  @media (max-width: 800px) {
    padding: 2rem;
  }

  section {
    max-width: 80rem;
    margin: auto;
    margin-top: 5rem;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fill, minmax(250px, 2fr));
    gap: 2rem;

    @media (max-width: 800px) {
      max-width: 100% !important;
      display: flex;
      overflow-x: auto;
      scroll-behavior: smooth;

      &::-webkit-scrollbar {
        display: none;
      }

      div {
        flex: none;
      }
    }
  }
`;

export const CardSkill = styled.div`
  width: 15.8rem;
  height: 18.8rem;
  background-image: ${(props) =>
    `linear-gradient(144deg, ${props.theme.colors.gradient})`};
  backdrop-filter: blur(200px);
  border-radius: 0.8rem;
  padding: 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.secundary};
  color: ${(props) => props.theme.colors.text};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

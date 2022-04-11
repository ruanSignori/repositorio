import styled from "styled-components";

export const SkillsContent = styled.div`
  height: 100vh;
  margin-bottom: 5rem;
  padding: 5rem 8rem;

  section {
    margin-top: 5rem;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;
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
  transition: all ease 0.4s;
`;

import { Title } from "../Title";
import listSkill from "./listSkill";
import { CardSkill, SkillsContent } from "./style";

export function Skills(): JSX.Element {
  return (
    <SkillsContent>
      <Title secundaryColor>Habilidades</Title>
      <section>
        {listSkill.map(({ nameSkill, picture, description }) => (
          <CardSkill key={nameSkill}>
            <img
              src={picture}
              alt={`Icone ${nameSkill}`}
              width={100}
              loading="lazy"
            />
            <p>{description}</p>
          </CardSkill>
        ))}
      </section>
    </SkillsContent>
  );
}

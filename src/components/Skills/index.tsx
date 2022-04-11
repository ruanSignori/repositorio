import { Title } from "../SecundaryTitle";
import listSkill from "./listSkill";
import { CardSkill, SkillsContent } from "./style";

export function Skills(): JSX.Element {
  return (
    <SkillsContent>
      <Title secundaryColor>Habilidades</Title>
      <section>
        {listSkill.map((skill) => (
          <CardSkill key={skill.nameSkill}>
            <img
              src={skill.picture}
              alt={`Icone ${skill.nameSkill}`}
              width={100}
              loading="lazy"
            />
            <p>{skill.description}</p>
          </CardSkill>
        ))}
      </section>
    </SkillsContent>
  );
}

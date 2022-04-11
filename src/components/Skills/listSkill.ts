type ListSkills = {
  nameSkill: string;
  picture: string;
  description: string;
};

const listSkill: ListSkills[] = [
  {
    nameSkill: "JavaScript",
    picture:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description:
      "Experiência utilizando ES6, async/await, POO, WebPack, DOM, Linters e fetch API.",
  },
  {
    nameSkill: "HTML5",
    picture:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description:
      "Conhecimento em SEO básico, TAGS semânticas e desenvolvimento focado em acessiblidade.",
  },
  {
    nameSkill: "CSS3",
    picture:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description:
      "Desenvolvimento de layouts  responsivos, Grid e FlexBox e animações básicas.",
  },
  {
    nameSkill: "ReactJS",
    picture:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description:
      "Desenvolvimento de SPA e utilização dos principais hooks. (Framework de JavaScript)",
  },
  {
    nameSkill: "NodeJS",
    picture:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    description:
      "Construção da comunicação de Back-end dos sites. Experiência principalmente com express.js.",
  },
  {
    nameSkill: "TypeScript",
    picture:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description: "Superset de JavaScript. Aprendendo POO, e tipos avançados.",
  },
  {
    nameSkill: "GIT",
    picture:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description:
      "Familiriade em usar GIT (Ferramenta de versionamento de código).",
  },
];

export default listSkill;

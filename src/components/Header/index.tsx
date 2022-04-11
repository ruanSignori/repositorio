import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import { Container } from "./style";

type HeaderProps = {
  isTransparent: boolean;
  toggleTheme(): void;
};

export function Header({
  isTransparent,
  toggleTheme,
}: HeaderProps): JSX.Element {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container transparent={isTransparent}>
      <a href="/">Home</a>
      <div>
        <a href="/">Projetos</a>
        <a href="#about">Sobre</a>
        <a href="/">Contato</a>
        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={15}
          width={40}
          handleDiameter={20}
          offColor={colors.text}
          onColor={colors.text}
        />
      </div>
    </Container>
  );
}

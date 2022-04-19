import { useEffect, useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Overview } from "./components/Overview";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import usePersistedTheme from "./hooks/usePersistedTheme";
import GlobalStyle from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

export default function App(): JSX.Element {
  const [theme, setTheme] = usePersistedTheme<DefaultTheme>("theme", dark);
  const [transparentHeader, setTransparentHeader] = useState<boolean>(true);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 40) {
        return setTransparentHeader(false);
      }

      return setTransparentHeader(true);
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [window.scrollY]);

  //
  // <ElipseOne gradient="#085fce91, #00fff075" position="0%, 130%" />
  // <ComponentBlur>{children}</ComponentBlur>
  // <ElipseSecund gradient="#085fce7a, #00fff085" position="200%, -250%" />
  //

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header isTransparent={transparentHeader} toggleTheme={toggleTheme} />
      <main>
        <Overview />
        <Skills />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </ThemeProvider>
  );
}

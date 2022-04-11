import { useEffect, useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import { AboutMe } from "./components/AboutMe";
import { Elipse } from "./components/Elipse";
import { Header } from "./components/Header";
import { Overview } from "./components/Overview";
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
  }, []);

  //
  // <ElipseOne gradient="#085fce91, #00fff075" position="0%, 130%" />
  // <ComponentBlur>{children}</ComponentBlur>
  // <ElipseSecund gradient="#085fce7a, #00fff085" position="200%, -250%" />
  //

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header isTransparent={transparentHeader} toggleTheme={toggleTheme} />
        <main>
          <Elipse>
            <Overview />
            <Skills />
            <AboutMe />
          </Elipse>
        </main>
      </div>
    </ThemeProvider>
  );
}

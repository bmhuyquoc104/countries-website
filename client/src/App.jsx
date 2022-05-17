import React from "react";
import { ThemeProvider } from "styled-components";
import StyledGlobal from "./GlobalStyled";
import { lightTheme, darkTheme } from "./theme";
import Header from "./components/Header/Header";
import useTheme from "./hooks/useTheme";

function App() {
  const [theme, themeToggler] = useTheme();
  const themeMode = theme === "lightTheme" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <StyledGlobal />
      <div className="App">
        <Header theme={theme} themeToggler={themeToggler} />
      </div>
    </ThemeProvider>
  );
}

export default App;

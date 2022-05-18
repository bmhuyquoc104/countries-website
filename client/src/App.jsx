import React from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import StyledGlobal from "./GlobalStyled";
import { lightTheme, darkTheme } from "./theme";
import Header from "./components/Header/Header";
import useTheme from "./hooks/useTheme";
import CountryDetail from "./pages/CountryDetail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  const [theme, themeToggler] = useTheme();
  const themeMode = theme === "lightTheme" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <StyledGlobal />
      <div className="App">
        <Header theme={theme} themeToggler={themeToggler} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:country" element={<CountryDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;

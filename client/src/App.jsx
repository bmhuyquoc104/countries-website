import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import StyledGlobal from "./GlobalStyled";
import { lightTheme, darkTheme } from "./theme";
import Header from "./components/Header/Header";
import useTheme from "./hooks/useTheme";
import CountryContext from "./hooks/useCountryContext";
import CountryDetail from "./pages/CountryDetail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState(null);
  const [theme, themeToggler] = useTheme();
  const themeMode = theme === "lightTheme" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <StyledGlobal />
      <div className="App">
        {/* eslint-disable-next-line react/jsx-no-constructed-context-values  */}
        <CountryContext.Provider
          // eslint-disable-next-line react/jsx-no-constructed-context-values
          value={{
            countries,
            setCountries,
            query,
            setQuery,
            region,
            setRegion,
          }}
        >
          <Header theme={theme} themeToggler={themeToggler} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:country" element={<CountryDetail />} />
            <Route path="/alpha/:code" element={<CountryDetail />} />
            <Route path="/region/:region" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CountryContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;

/* eslint no-unused-expressions: ["error", { "allowTernary": true }] */

// Import useState, useEffect
import { useEffect, useState } from "react";

// // Create theme state to check for current theme
// const [theme, setTheme] = useState("lightTheme");

// // Function to setMode depend on the theme
// const setMode = (mode) => {
//   setTheme(mode);
// };

// // Function to get initial theme from local storage
// // if yes => set that Theme -> if not set to lightTheme
// useEffect(() => {
//   const localTheme = localStorage.getItem("theme");
//   localTheme ? setTheme(localTheme) : setMode("lightTheme");
// }, []);

// // Function to toggler between theme depend on the current theme
// // If lightTheme => mode to dark
// // If darkTheme => mode to light
// const themeToggler = () => {
//   theme === "lightTheme" ? setMode("darkTheme") : setMode("lightTheme");
// };

// // Export necessary functions
// export { useTheme };
const useTheme = () => {
  const [theme, setTheme] = useState("lightTheme");
  const [toggleSwitchThemeIcon, setToggleSwitchThemeIcon] = useState(false);

  const setMode = (mode) => {
    localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const ThemeTogglers = () => {
    theme === "lightTheme" ? setMode("darkTheme") : setMode("lightTheme");
    setToggleSwitchThemeIcon(!toggleSwitchThemeIcon);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("lightTheme");
  }, []);

  return [theme, ThemeTogglers, toggleSwitchThemeIcon];
};

export default useTheme;

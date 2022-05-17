const lightTheme = {
  body: {
    backgroundColor: "var(--bg_lightMode)",
    color: "var(--text_lightMode)",
  },
  header: {
    backgroundColor: "var(--element_lightMode)",
    boxShadow: "0 3px 5px var(--element_lightMode)",
  },
};

const darkTheme = {
  body: {
    backgroundColor: "var(--bg_darkMode)",
    color: "var(--text_darkMode)",
    boxShadow: "0 3px 5px var(--element)",
  },
  header: {
    backgroundColor: "var(--element_darkMode)",
  },
};

export { lightTheme, darkTheme };

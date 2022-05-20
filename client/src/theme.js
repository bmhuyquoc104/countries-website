const lightTheme = {
  body: {
    backgroundColor: "var(--bg_lightMode)",
    color: "var(--text_lightMode)",
    boxShadow: "0 3px 5px var(--text2_lightMode)",
    text: {
      color: "var(--text2_lightMode)",
    },
  },
  header: {
    backgroundColor: "var(--element_lightMode)",
  },
  icon: {
    color: "var(--text_lightMode)",
  },
  active: {
    color: "var(--text_darkMode)",
    backgroundColor: "var(--bg_darkMode)",
  },
};

const darkTheme = {
  body: {
    backgroundColor: "var(--bg_darkMode)",
    color: "var(--text_darkMode)",
    boxShadow: "0 3px 5px var(--element)",
    text: {
      color: "var(--text_darkMode)",
    },
  },
  header: {
    backgroundColor: "var(--element_darkMode)",
  },
  icon: {
    color: "var(--text_darkMode)",
  },
  active: {
    color: "var(--text_lightMode)",
    backgroundColor: "var(--bg_lightMode)",
  },
};

export { lightTheme, darkTheme };

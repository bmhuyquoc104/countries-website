import React from "react";
import PropTypes from "prop-types";
import { StyledHeader, StyledIcon, StyledDarkModeIcon } from "./Header.styled";

function Header({ themeToggler, theme }) {
  return (
    <StyledHeader>
      {theme === "lightTheme" ? (
        <>
          <h1>Where in the world?</h1>
          <button onClick={themeToggler} type="button">
            <StyledIcon />
            <p>Dark mode</p>
          </button>
        </>
      ) : (
        <>
          <h1>Where in the world?</h1>
          <button onClick={themeToggler} type="button">
            <StyledDarkModeIcon />
            <p>Light mode</p>
          </button>
        </>
      )}
    </StyledHeader>
  );
}

Header.propTypes = {
  themeToggler: PropTypes.func,
  theme: PropTypes.string,
};

Header.defaultProps = {
  themeToggler: () => {},
  theme: "",
};

export default Header;

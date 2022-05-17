import styled from "styled-components";
import { Search } from "@styled-icons/evil/Search";

const StyledSearchFilter = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2em;
  background-color: ${({ theme }) => theme.body.backgroundColor};
  .search-bar {
    display: flex;
    align-items: center;
    width: 35%;
    background-color: ${({ theme }) => theme.header.backgroundColor};
    padding: 0.5em 1.5em;
    border-radius: 5px;
    box-shadow: 0 0 10px 2px ${({ theme }) => theme.body.boxShadow};
  }

  input {
    flex: 1;
    outline: none;
    color: ${({ theme }) => theme.icon.color};
    border: none;
    display: flex;
    width: "40%";
    background-color: transparent;
    padding: 0.5em 1.5em;
    gap: 1em;
  }

  input::placeholder {
    color: ${({ theme }) => theme.icon.color};
  }
`;

const StyledSearchIcon = styled(Search)`
  /* color: ${({ theme }) => theme.icon.color}; */
`;

export { StyledSearchIcon, StyledSearchFilter };

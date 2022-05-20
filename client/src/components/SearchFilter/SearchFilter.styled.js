import styled from "styled-components";

const StyledSearchFilter = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em;
  background-color: ${({ theme }) => theme.body.backgroundColor};
  .search-bar {
    display: flex;
    align-items: center;
    width: max(200px,35%);
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
    background-color: transparent;
    padding: 0.5em 1.5em;
    gap: 1em;
  }

  input::placeholder {
    color: ${({ theme }) => theme.icon.color};
  }

  .container {
    position: relative;
    background-color: ${({ theme }) => theme.header.backgroundColor};
    padding: 0.5em 0.5em;
    display: flex;
    gap: 3em;
    border-radius: 5px;
  }
  .container button {
    background-color: transparent;
    justify-content:space-between;
    padding: 0.5em 0.5em;
    display: flex;
    width: 100%;
    gap:2em;
    outline: none;
    color: ${({ theme }) => theme.icon.color};
    border: none;
  }
  .toggle {
    z-index: 2;
    overflow-y: scroll;
    height: 27vh;
    gap: 0.3em;
    position: absolute;
    width: 100%;
    background-color: ${({ theme }) => theme.header.backgroundColor};
    top: 8vh;
    left: 0;
    border-radius: 5px;
    box-shadow: 0 0 10px 2px ${({ theme }) => theme.body.boxShadow};
    color: ${({ theme }) => theme.icon.color};
  }
  .options {
    display: flex;
    flex-direction: column;
    width:100%;
  }
  .options button {
    padding:0;
  }
  .options input {
    padding: 1.25em;
    width:100%;  
  }
  .options input:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.active.backgroundColor};
    color: ${({ theme }) => theme.active.color};
  }

  @media (max-width: 480px) {
    padding: 1em;
    flex-direction:column;
    align-items:revert;
    gap:1em;
    .search-bar{
        width: 100%;
    };
    .container{
        width: 200px;
    }
  }
`;

export default StyledSearchFilter;

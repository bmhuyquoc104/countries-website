import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  padding: 2em;
  gap: 2em;
  &:nth-child(2) {
    margin-left: auto;
  }
  .container {
    display: grid;
    grid-template-columns: auto;
    gap: 5em;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
  .country {
    background-color: ${({ theme }) => theme.header.backgroundColor};
    display: flex;
    border-radius: 5px;
    box-shadow: 0px 5px 15px 10px rgba(0, 0, 0, 0.1);
    flex-direction: column;
  }
  .country img {
    width: 100%;
    height: 20vh;
    object-fit: cover;
  }
  .country-info {
    display: flex;
    flex-direction: column;
    padding: 1.75em;
  }

  .country-info h1 {
    font-size: 1rem;
    font-weight: 800;
    color: ${({ theme }) => theme.body.color};
    margin-bottom: 0.5em;
  }

  .country-info h2 span {
    font-size: 0.875rem;
    margin-bottom: 0.25em;
    font-weight: 600;
    color: ${({ theme }) => theme.body.color};
  }
  .country-info h2 {
    display: flex;
    gap: 0.5em;
    font-size: 0.875rem;
    font-weight: 300;
    color: ${({ theme }) => theme.body.text.color};
  }
  .limit-container {
    background-color: ${({ theme }) => theme.header.backgroundColor};
    width: max(200px, 15%);
    padding: 1em 0;
    position: relative;
    border-radius: 5px;
    margin-top: -2em;
  }
  .limit-btn {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0.25em 1em;
    justify-content: space-between;
    background-color: transparent;
    font-family: "Nunito Sans", sans-serif;
    font-size: 0.875rem;
    border: none;
    color: ${({ theme }) => theme.body.color};
  }
  .options {
    display: flex;
    width: 100%;
    flex-direction: column;
    border-radius: 5px;
    border: none;
    position: absolute;
    top: 8vh;
    overflow: hidden;
    z-index: 1;
  }
  .option {
    border: none;
    background-color: transparent;
  }
  input {
    width: 100%;
    padding: 1em;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.header.backgroundColor};
    color: ${({ theme }) => theme.body.color};
    font-size: 1rem;
  }
  input:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.active.backgroundColor};
    color: ${({ theme }) => theme.active.color};
  }
  @media (max-width: 623px) {
    .country img {
      height: 30vh;
    }
  }
  @media (max-width: 480px) {
    padding: 1em;
    .limit-container {
      margin-top: -1em;
    }
  }
`;

export default StyledMain;

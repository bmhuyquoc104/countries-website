import styled from "styled-components";

const StyledPagination = styled.div`
  align-self: center;
  display: flex;
  gap: 0.5em;
  margin-bottom:2em;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.header.backgroundColor};
  color: ${({ theme }) => theme.body.color};
  .otherPages {
    padding: 1em 1.25em;
    background-color: ${({ theme }) => theme.header.backgroundColor};
    color: ${({ theme }) => theme.body.color};
    font-family: "Nunito Sans", sans-serif;
    font-size: 0.875rem;
    border-radius: 5px;
    border: none;
  }
  .currentPage {
    padding: 1em 1.25em;
    background-color: ${({ theme }) => theme.active.backgroundColor};
    color: ${({ theme }) => theme.active.color};
    font-family: "Nunito Sans", sans-serif;
    font-size: 0.875rem;
    border-radius: 5px;
    border: none;
  }
`;

export default StyledPagination;

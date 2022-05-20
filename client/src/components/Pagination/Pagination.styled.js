import styled from "styled-components";

const StyledPagination = styled.div`
  align-self: center;
  display: flex;
  margin-bottom:2em;
  flex-wrap: wrap;
  gap: 0.4em;
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
  .otherPages:hover, .currentPage:hover{
    cursor: pointer;
  }
  button:disabled{
    opacity:0.2 ;
    pointer-events: none;
  }
  .otherPages.dot{
    pointer-events: none;
  }
`;

export default StyledPagination;

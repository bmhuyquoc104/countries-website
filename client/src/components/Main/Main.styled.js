import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2em;
  &:nth-child(2){
    margin-left:auto;
  }
  .container {
    display: grid;
    padding: 2em;
    grid-template-columns: auto;
    gap: 5em;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
  .country {
    background-color: ${({ theme }) => theme.header.backgroundColor};
    aspect-ratio: 1/1.15;
    display: flex;
    border-radius: 5px;
    box-shadow: 0px 5px 15px 10px rgba(0, 0, 0, 0.1);
    flex-direction: column;
  }
  .country img {
    width: 100%;
    height: 24vh;
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
  
`;

export default StyledMain;

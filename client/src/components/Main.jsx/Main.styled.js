import styled from "styled-components";

const StyledMain = styled.main`
  display: grid;
  padding: 2em;
  grid-auto-flow:auto;
  gap:1em;
  grid-template-columns:repeat(auto-fit,minmax(15rem,1fr));
`;

export default StyledMain;

import styled from "styled-components";

const StyledCountry = styled.main`
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 2.5em;

  .back {
    width: max(10%, 100px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Nunito Sans", sans-serif;
    font-size: 0.875rem;
    gap: 0.6em;
    border-radius: 5px;
    border: none;
    background-color: ${({ theme }) => theme.header.backgroundColor};
    padding: 0.8em 0;
    box-shadow: 0px 0px 25px 5px rgba(0, 0, 0, 0.1);
    color: ${({ theme }) => theme.body.color};
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > * {
      width: 46%;
    }
  }
  .container img {
    aspect-ratio: 1/0.6;
    object-fit: cover;
  }

  .container .country {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 2em;
  }

  .container .country h1 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.body.color};
  }
  .container .country-info {
    display: flex;
    width: 90%;
    gap: 0.75em;
    justify-content: space-between;
  }
  .container .country-info h2 span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.body.color};
    font-weight: 600;
  }
  .container .country-info h2 {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.body.color};
    font-weight: 300;
  }
  .left-info,
  .right-info {
    display: flex;
    flex-direction: column;
    gap: 0.6em;
  }
  .border-countries {
    width: 80%;
    display: flex;
    margin-top: 2em;
    align-items: center;
    gap: 0.25em;
  }
  .border-countries span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.body.color};
    font-weight: 600;
    margin-right:0.75em;
  }
  .border-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5em;
  }
  .border {
    border-radius: 2px;
    padding: 0.25em 2.5em;
    border: none;
    background-color: ${({ theme }) => theme.header.backgroundColor};
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
    font-family: "Nunito Sans", sans-serif;
    text-transform: lowercase;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.body.color};
  }

  @media (max-width: 900px) {
    .border-countries {
      width: 100%;
      flex-direction: column;
    }
  }

  @media (max-width:768px){
    .container{
      flex-direction:column;
      gap:2em;

      & > *{
        width: 100%;
      }
    }
  }
  @media (max-width:530px){
    .container .country-info{
      flex-direction: column;
      gap:4em;
    }
    .border-countries{
      margin-top:0;
      align-items:flex-start;
    }
  }
`;

export default StyledCountry;

import React from "react";
import { useGetAllCountries } from "../../hooks/useCountry";
import StyledMain from "./Main.styled";

function Main() {
  const {
    data: countries, isLoading, error, isError,
  } = useGetAllCountries();

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <StyledMain>
      {countries.data.map((country, index) => (
        <div className="main-container">
          {index < 8 ? (
            <div className="country" key={country.name.common}>
              <img src={country.flags.png} alt="country-flag" />
              <div className="country-info">
                <h1>{country.name.common}</h1>
                <h2>
                  <span>Population:</span>
                  {country.population}
                </h2>
                <h2>
                  <span>Region:</span>
                  {country.region}
                </h2>
                <h2>
                  <span>Capital:</span>
                  {country.capital[0]}
                </h2>
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </StyledMain>
  );
}

export default Main;

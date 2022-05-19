/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllCountries } from "../../hooks/useCountry";
import StyledMain from "./Main.styled";

function Main() {
  // eslint-disable-next-line func-names
  // Convert string to this format
  const navigate = useNavigate();

  const currency = function (number) {
    return new Intl.NumberFormat("ja-JP", {}).format(number);
  };
  const { data: countries, isLoading, error, isError } = useGetAllCountries();

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <StyledMain>
      {countries.data.map((country, index) => (
        <ul key={country.name.common} className="main-container">
          {index < 8 ? (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li
              onClick={() => {
                navigate(`/${country.name.common}`);
              }}
              className="country"
            >
              <img src={country.flags.png} alt="country-flag" />
              <div className="country-info">
                <h1>{country.name.common}</h1>
                <h2>
                  <span>Population:</span>
                  {currency(country.population)}
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
            </li>
          ) : null}
        </ul>
      ))}
    </StyledMain>
  );
}

export default Main;

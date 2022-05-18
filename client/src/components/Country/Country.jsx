/* eslint-disable arrow-body-style */
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useGetCountryByName } from "../../hooks/useCountry";
import StyledCountry from "./Country.styled";

function Country({ name }) {
  const { data, isError, error, isLoading } = useGetCountryByName("Belgium");

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // if (!name) {
  //   return "";
  // }
  console.log(data.data);

  const showAllLanguages = (languages) => {
    Object.values(languages).forEach((language) => language);
  };

  const showCurrency = (currencies) => {
    Object.values(currencies).map((currency) => {
      return currency.name;
    });
  };
  return (
    <StyledCountry>
      <button type="button">
        <FontAwesomeIcon icon={faArrowLeftLong} />
        Back
      </button>
      <div>
        {data.data.map((element) => (
          <div className="container" key={element.name.common}>
            <img src={element.flags.png} alt="country-flag" />
            <div className="country">
              <h1>{element.name.common}</h1>
              <div className="country-info">
                <div className="left-info">
                  <h2>
                    <span>Native Name:</span>
                    {element.name.nativeName.nld.common}
                  </h2>
                  <h2>
                    <span>Population:</span>
                    {element.population}
                  </h2>
                  <h2>
                    <span>Region</span>
                    {element.region}
                  </h2>
                  <h2>
                    <span>Sub Region:</span>
                    {element.subregion}
                  </h2>
                  <h2>
                    <span>Capital:</span>
                    {element.capital}
                  </h2>
                </div>
                <div className="right-info">
                  <h2>
                    {" "}
                    <span>Top Level Domain:</span>
                    {element.tld[0]}
                  </h2>
                  <h2>
                    {" "}
                    <span>Currencies:</span>
                    {showCurrency(element.currencies)}
                  </h2>
                  <h2>
                    {" "}
                    <span>Languages</span>
                    {showAllLanguages(element.languages)}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </StyledCountry>
  );
}

Country.propTypes = {
  name: PropTypes.string,
};

Country.defaultProps = {
  name: "",
};
export default Country;

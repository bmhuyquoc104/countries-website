/* eslint-disable arrow-body-style */
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import {
  useGetCountryByName,
  useGetCountryByCode,
} from "../../hooks/useCountry";
import StyledCountry from "./Country.styled";
import CountryContext from "../../hooks/useCountryContext";

function Country() {
  // Get the params from the url
  const { country, code } = useParams();
  // Declare navigate for routing
  const navigate = useNavigate();
  // Fetch the data from the method getCountryByName
  const {
    data, isError, error, isLoading,
  } = useGetCountryByName(country);

  const { setQuery } = useContext(CountryContext);

  // Fetch the data from the method getCountryByCode
  const {
    data: countryByCode,
    isError: isCodeError,
    error: errorCode,
    isLoading: isLoadingCode,
  } = useGetCountryByCode(code);
  // Render if the getByName is loading
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  // Render if the getByName is error
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  // Render if the getByCode is loading
  if (isLoadingCode) {
    return <h1>Loading ...</h1>;
  }
  // Render if the getByCode is error
  if (isCodeError) {
    return <h1>{errorCode.message}</h1>;
  }

  // Function to loop through the object and return all languages
  const showAllLanguages = (languages) => {
    const temp = [];
    if (languages == null) {
      return "";
    }
    // eslint-disable-next-line no-return-assign
    Object.values(languages)?.map((element) => {
      return temp.push(element);
    });
    return temp.toString();
  };

  // Convert string to this format
  // eslint-disable-next-line func-names
  const convertPopulation = function (number) {
    return new Intl.NumberFormat("ja-JP", {}).format(number);
  };
  // Function to show nativeName depend on the object
  const showNativeName = (nativeName) => {
    const temp = [];
    if (nativeName == null) {
      return "";
    }
    Object.values(nativeName)?.map((element) => {
      return temp.push(element.common);
    });
    return temp.pop();
  };

  // Function  to loop through the object and return all currencies
  const showCurrency = (currencies) => {
    const temp = [];
    if (currencies == null) {
      return "";
    }
    Object.values(currencies)?.map((currency) => {
      return temp.push(currency.name);
    });
    return temp.toString();
  };
  return (
    <StyledCountry>
      <button
        onClick={() => {
          navigate((-1));
          setQuery("");
        }}
        className="back"
        type="button"
      >
        <FontAwesomeIcon icon={faArrowLeftLong} />
        Back
      </button>
      {/* Load depend on the params from the url */}
      {country ? (
        <div>
          {data.data?.map((element) => (
            <div className="container" key={element.name.common}>
              <img src={element.flags.png} alt="country-flag" />
              <div className="country">
                <h1>{element.name.common}</h1>
                <div className="country-info">
                  <div className="left-info">
                    <h2>
                      <span>Native Name: </span>
                      {showNativeName(element.name.nativeName)}
                    </h2>
                    <h2>
                      <span>Population: </span>
                      {convertPopulation(element.population)}
                    </h2>
                    <h2>
                      <span>Region: </span>
                      {element.region}
                    </h2>
                    <h2>
                      <span>Sub Region: </span>
                      {element.subregion}
                    </h2>
                    <h2>
                      <span>Capital: </span>
                      {element.capital}
                    </h2>
                  </div>
                  <div className="right-info">
                    <h2>
                      {" "}
                      <span>Top Level Domain: </span>
                      {element.tld[0]}
                    </h2>
                    <h2>
                      {" "}
                      <span>Currencies: </span>
                      {showCurrency(element.currencies)}
                    </h2>
                    <h2>
                      {" "}
                      <span>Languages: </span>
                      {showAllLanguages(element.languages)}
                    </h2>
                  </div>
                </div>
                <div className="border-countries">
                  <span>Border Countries: </span>
                  <div className="border-container">
                    {element.borders?.map((border) => (
                      <button
                        onClick={() => navigate(`/alpha/${border}`)}
                        className="border"
                        type="button"
                      >
                        {border}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {countryByCode.data?.map((element) => (
            <div className="container" key={element.name.common}>
              <img src={element.flags.png} alt="country-flag" />
              <div className="country">
                <h1>{element.name.common}</h1>
                <div className="country-info">
                  <div className="left-info">
                    <h2>
                      <span>Native Name: </span>
                      {showNativeName(element.name.nativeName)}
                    </h2>
                    <h2>
                      <span>Population: </span>
                      {convertPopulation(element.population)}
                    </h2>
                    <h2>
                      <span>Region: </span>
                      {element.region}
                    </h2>
                    <h2>
                      <span>Sub Region: </span>
                      {element.subregion}
                    </h2>
                    <h2>
                      <span>Capital: </span>
                      {element.capital}
                    </h2>
                  </div>
                  <div className="right-info">
                    <h2>
                      {" "}
                      <span>Top Level Domain: </span>
                      {element.tld[0]}
                    </h2>
                    <h2>
                      {" "}
                      <span>Currencies: </span>
                      {showCurrency(element.currencies)}
                    </h2>
                    <h2>
                      {" "}
                      <span>Languages: </span>
                      {showAllLanguages(element.languages)}
                    </h2>
                  </div>
                </div>
                <div className="border-countries">
                  <span>Border Countries: </span>
                  <div className="border-container">
                    {element.borders?.map((border) => (
                      <button
                        onClick={() => navigate(`/alpha/${border}`)}
                        className="border"
                        type="button"
                      >
                        {border}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </StyledCountry>
  );
}

export default Country;

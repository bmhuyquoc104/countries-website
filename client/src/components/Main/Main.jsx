/* eslint-disable function-paren-newline */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetAllCountries,
  useGetCountryByRegion,
} from "../../hooks/useCountry";
import CountryContext from "../../hooks/useCountryContext";
import StyledMain from "./Main.styled";
import Pagination from "../Pagination/Pagination";

function Main() {
  // eslint-disable-next-line func-names
  // Convert string to this format
  const navigate = useNavigate();

  // eslint-disable-next-line func-names
  const currency = function (number) {
    return new Intl.NumberFormat("ja-JP", {}).format(number);
  };
  // Get query using useContext
  const { query } = useContext(CountryContext);

  // Get region in the url
  const { region } = useParams();
  // Get All Countries using the hook
  const {
    data, isLoading, error, isError, isFetched,
  } = useGetAllCountries();

  //  Get country by region using the custom hook
  const {
    data: CountryByRegion,
    isLoading: isLoadingByRegion,
    error: errorByRegion,
    isError: isErrorByRegion,
    isFetched: isFetchedByRegion,
  } = useGetCountryByRegion(region);

  // State to manage the page
  const [page, setPage] = useState(1);

  // State to manage the total countries per page
  const [countriesPerPage, setCountriesPerPage] = useState(8);

  // State to manage the countries
  const { countries, setCountries } = useContext(CountryContext);

  // State to mange limit container
  const [isToggle, setIsToggle] = useState(false);

  // Assign data to state when the component is mounting
  useEffect(() => {
    // Check if the region is null or not
    if (region != null) {
      if (isFetchedByRegion) {
        // set the array by the country get by region
        setCountries(
          CountryByRegion.data.filter((element) =>
            // eslint-disable-next-line implicit-arrow-linebreak
            element.name.common.toLowerCase().includes(query.toLowerCase()),
          ),
        );
      }
    } else if (isFetched) {
      //  set the array by all countries
      setCountries(
        data.data.filter((element) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          element.name.common.toLowerCase().includes(query.toLowerCase()),
        ),
      );
    }
  }, [data, query, region, CountryByRegion]);

  // country per page arr options
  const limitCountries = [8, 12, 16, 20];
  // Render when the request is loading
  if (isLoadingByRegion) {
    return <h1>Loading ...</h1>;
  }

  // Render when the request is error
  if (isErrorByRegion) {
    return <h1>{errorByRegion.message}</h1>;
  }

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  // Render when the request is error
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // Calculate the total page
  const totalPages = Math.ceil(countries.length / countriesPerPage);

  //  Find the last and first index for slicing the arr
  const indexOfLastCountry = page * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  // Function to change to the required page
  const handleChangePage = (currentPage) => {
    setPage(currentPage);
  };
  // Function to change to next page
  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };
  // Function to change previous page
  const handlePreviousPage = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <StyledMain>
      <div className="limit-container">
        <button
          onClick={() => setIsToggle(!isToggle)}
          className="limit-btn"
          type="button"
        >
          Countries per page ?
          {isToggle ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </button>
        {isToggle ? (
          <div className="options">
            {limitCountries.map((limit, index) => (
              <button
                type="button"
                className="option"
                onClick={(e) => {
                  setCountriesPerPage(e.target.value);
                  setIsToggle(false);
                }}
              >
                <input
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  readOnly
                  value={limit}
                />
              </button>
            ))}
          </div>
        ) : null}
      </div>
      {/* Render if region is not null */}
      {region != null ? (
        <div className="container">
          {countries
            .slice(indexOfFirstCountry, indexOfLastCountry)
            ?.map((country) => (
              <ul key={country.name.common} className="main-container">
                <li
                  onClick={() => {
                    navigate(`/${country.name.common}`);
                  }}
                  className="country"
                >
                  <img src={country?.flags?.png} alt="country-flag" />
                  <div className="country-info">
                    <h1>{country?.name?.common}</h1>
                    <h2>
                      <span>Population:</span>
                      {currency(country?.population)}
                    </h2>
                    <h2>
                      <span>Region:</span>
                      {country?.region}
                    </h2>
                    <h2>
                      <span>Capital:</span>
                      {country?.capital}
                    </h2>
                  </div>
                </li>
              </ul>
            ))}
        </div>
      ) : (
        // render all countries
        <div className="container">
          {countries
            .slice(indexOfFirstCountry, indexOfLastCountry)
            ?.map((country) => (
              <ul key={country.name.common} className="main-container">
                <li
                  onClick={() => {
                    navigate(`/${country.name.common}`);
                  }}
                  className="country"
                >
                  <img src={country?.flags?.png} alt="country-flag" />
                  <div className="country-info">
                    <h1>{country?.name?.common}</h1>
                    <h2>
                      <span>Population:</span>
                      {currency(country?.population)}
                    </h2>
                    <h2>
                      <span>Region:</span>
                      {country?.region}
                    </h2>
                    <h2>
                      <span>Capital:</span>
                      {country?.capital}
                    </h2>
                  </div>
                </li>
              </ul>
            ))}
        </div>
      )}
      {/* Render pagination */}
      <Pagination
        handleChangePage={handleChangePage}
        totalPages={totalPages}
        page={page}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </StyledMain>
  );
}

export default Main;

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useGetAllCountries } from "../../hooks/useCountry";
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
  // Get All Countries using the hook
  const { data, isLoading, error, isError, isFetched } = useGetAllCountries();

  // State to manage the page
  const [page, setPage] = useState(1);

  // State to manage the total countries per page
  const [countriesPerPage, setCountriesPerPage] = useState(8);

  // State to manage the countries
  const [countries, setCountries] = useState([]);

  // State to mange limit container
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    if (isFetched) {
      setCountries(data.data);
    }
  }, [data]);

  // country per page arr options
  const limitCountries = [8, 12, 16, 20];
  // Render when the request is loading
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
  console.log(countriesPerPage);
  // Function to change to the required page
  const handleChangePage = (currentPage) => {
    setPage(currentPage);
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
                onClick={(e) => setCountriesPerPage(e.target.value)}
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
      <Pagination
        handleChangePage={handleChangePage}
        totalPages={totalPages}
        page={page}
      />
    </StyledMain>
  );
}

export default Main;

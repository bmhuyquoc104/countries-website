/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
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
  const { data, isLoading, error, isError, isFetched } = useGetAllCountries();

  const [page, setPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(25);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    if (isFetched) {
      setCountries(data.data);
    }
  }, [data]);
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const totalPages = Math.ceil(countries.length / countriesPerPage);
  const indexOfLastCountry = page * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const handleChangePage = (currentPage) => {
    setPage(currentPage);
  };
  return (
    <StyledMain>
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

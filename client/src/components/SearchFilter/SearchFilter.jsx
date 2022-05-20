/* eslint-disable no-else-return */
import React, { useState, useContext, useEffect } from "react";
// eslint-disable-next-line import/no-unresolved
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import CountryContext from "../../hooks/useCountryContext";
import StyledSearchFilter from "./SearchFilter.styled";

function SearchFilter() {
  const arr = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [isToggle, setIsToggle] = useState(false);
  const [region, setRegion] = useState("");
  // Get All Countries using the hook
  const { countries, setCountries, query, setQuery } =
    useContext(CountryContext);
  const handleChange = (e) => {
    setRegion(e.target.value);
  };
  // useEffect(() => {
  //   console.log(query);
  //   setCountries(
  //     countries.filter((country) => {
  //       if (query === "") {
  //         return country;
  //       } else if (
  //         country.name.common.toLowerCase().includes(query.toLowerCase())
  //       ) {
  //         return country;
  //       }
  //     })
  //   );
  // }, [query]);

  return (
    <StyledSearchFilter>
      <div className="search-bar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a country..."
        />
      </div>
      <div className="container">
        <button
          type="button"
          onClick={() => setIsToggle(!isToggle)}
          className="btn"
        >
          Filter by region
          {!isToggle ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </button>
        {isToggle ? (
          <div className="toggle">
            <div className="options">
              {arr.map((e, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <button type="button" onClick={handleChange} key={index}>
                  <input readOnly value={e} />
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </StyledSearchFilter>
  );
}

export default SearchFilter;

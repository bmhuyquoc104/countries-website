import React, { useState } from "react";
// eslint-disable-next-line import/no-unresolved
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import StyledSearchFilter from "./SearchFilter.styled";

function SearchFilter() {
  const arr = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [isToggle, setIsToggle] = useState(false);
  const [country, setCountry] = useState("");
  const handleChange = (e) => {
    setCountry(e.target.value);
  };
  console.log(country);
  return (
    <StyledSearchFilter>
      <div className="search-bar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input placeholder="Search for a country..." />
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

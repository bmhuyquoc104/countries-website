/* eslint-disable no-else-return */
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

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
  // Options in filter box
  const arr = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];
  // State to manage the dropdown
  const [isToggle, setIsToggle] = useState(false);
  // Declare navigate for routing
  const navigate = useNavigate();
  // Get setQuery from useContext
  const { setQuery } = useContext(CountryContext);
  // Get All Countries By Region using the hook
  const handleChange = (e) => {
    const region = e.target.value;
    // If option is all -> return all region by routing to home page
    if (region === "All") {
      navigate("/");
    } else {
      navigate(`/region/${region}`, { replace: true });
    }
    setIsToggle(false);
  };

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

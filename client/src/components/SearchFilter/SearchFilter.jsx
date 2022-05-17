import React from "react";
// eslint-disable-next-line import/no-unresolved
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { StyledSearchFilter } from "./SearchFilter.styled";

function SearchFilter() {
  return (
    <StyledSearchFilter>
      <div className="search-bar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input placeholder="Search for a country..." />
      </div>
    </StyledSearchFilter>
  );
}

export default SearchFilter;

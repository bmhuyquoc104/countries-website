import React from "react";
import PropTypes from "prop-types";
import StyledPagination from "./Pagination.styled";

function Pagination({ totalPages, handleChangePage, page }) {
  console.log(page);
  const pages = [];
  for (let i = 1; i <= totalPages; i += 1) {
    pages.push(i);
  }
  return (
    <StyledPagination>
      {pages.map((element, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div>
          {index + 1 === page ? (
            <button
              onClick={() => handleChangePage(element)}
              type="button"
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="currentPage"
            >
              {element}
            </button>
          ) : (
            <button
              onClick={() => handleChangePage(element)}
              type="button"
              className="otherPages"
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            >
              {element}
            </button>
          )}
        </div>
      ))}
    </StyledPagination>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number,
  handleChangePage: PropTypes.func,
  page: PropTypes.number,
};

Pagination.defaultProps = {
  totalPages: 0,
  handleChangePage: () => {},
  page: 0,
};

export default Pagination;

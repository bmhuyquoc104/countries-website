import React from "react";
import PropTypes from "prop-types";
import StyledPagination from "./Pagination.styled";

function Pagination({
  totalPages,
  handleChangePage,
  page,
  handleNextPage,
  handlePreviousPage,
}) {
  const pages = [];
  for (let i = 1; i <= totalPages; i += 1) {
    pages.push(i);
  }
  return (
    <StyledPagination>
      {page === 1 ? (
        <button type="button" disabled className="otherPages">
          Prev
        </button>
      ) : (
        <button
          onClick={handlePreviousPage}
          type="button"
          className="otherPages"
        >
          Prev
        </button>
      )}

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
      {page === pages.pop() ? (
        <button type="button" disabled className="otherPages">
          Next
        </button>
      ) : (
        <button onClick={handleNextPage} type="button" className="otherPages">
          Next
        </button>
      )}
    </StyledPagination>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number,
  handleChangePage: PropTypes.func,
  page: PropTypes.number,
  handleNextPage: PropTypes.func,
  handlePreviousPage: PropTypes.func,
};

Pagination.defaultProps = {
  totalPages: 0,
  handleChangePage: () => {},
  page: 0,
  handleNextPage: () => {},
  handlePreviousPage: () => {},
};

export default Pagination;

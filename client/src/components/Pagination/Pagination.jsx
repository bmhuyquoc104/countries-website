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
  let i = 1;
  // Array to display pagination
  while (i < totalPages) {
    // Display part of the arr
    if (i <= 3 || i >= totalPages - 2 || (i >= page - 1 && i <= page + 1)) {
      pages.push(i);
      i += 1;
    } else {
      // use dot dot dot to display when the pagination is long
      pages.push("...");
      i = i < page ? page - 1 : totalPages - 2;
    }
  }
  return (
    <StyledPagination>
      {/* Check if this is the first page or not */}
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

      {pages.map((element, index, arr) => (
        // eslint-disable-next-line react/no-array-index-key
        <div>
          {arr[index] === page ? (
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
            <div>
              {/* remove click events for dot dot dot */}
              {arr[index] === "..." ? (
                <button
                  onClick={() => handleChangePage(element)}
                  type="button"
                  className="otherPages dot"
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
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
          )}
        </div>
      ))}
      {/* Check if the currentPage is last page */}
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

// Declare propTypes
Pagination.propTypes = {
  totalPages: PropTypes.number,
  handleChangePage: PropTypes.func,
  page: PropTypes.number,
  handleNextPage: PropTypes.func,
  handlePreviousPage: PropTypes.func,
};

// Declare default props
Pagination.defaultProps = {
  totalPages: 0,
  handleChangePage: () => {},
  page: 0,
  handleNextPage: () => {},
  handlePreviousPage: () => {},
};

export default Pagination;

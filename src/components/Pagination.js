import React, { useEffect, useState } from "react";

function Pagination(props) {
  const { pageChange, allPagesNumber, dataDisplayed } = props;
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    pageChange(currentPage);
  }, [currentPage]);
  const onFirstPage = () => {
    setCurrentPage(1);
    dataDisplayed(true);
  };

  const onLastPage = () => {
    setCurrentPage(allPagesNumber);
    dataDisplayed(true);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
    dataDisplayed(true);
  };

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1);
    dataDisplayed(true);
  };
  const validateInput = (value) => {
    const regex = /^[0-9\b]+$/;
    const regexTest = regex.test(value);
    regexTest && setCurrentPage(parseInt(value, 10));
  };
  return (
    <div className="pagination__container">
      <div
        className={`pagination__button pagination__page-first ${
          currentPage === 1 ? "pagination__button--disabled" : ""
        }`}
        onClick={() => onFirstPage()}
      >
        First
      </div>
      <div
        className={`pagination__button pagination__page-previous ${
          currentPage === 1 && "pagination__button--disabled"
        }`}
        onClick={() => onPreviousPage()}
      >
        Previous
      </div>
      <div className="pagination__page-active">
        <input
          className="pagination__current-page"
          onChange={(e) => validateInput(e.target.value)}
          value={currentPage}
        />
        /<span>{allPagesNumber}</span>
      </div>
      <div
        className={`pagination__button pagination__page-next ${
          currentPage === allPagesNumber && "pagination__button--disabled"
        }`}
        onClick={() => onNextPage()}
      >
        Next
      </div>
      <div
        className={`pagination__button pagination__page-last ${
          currentPage === allPagesNumber && " pagination__button--disabled"
        }`}
        onClick={() => onLastPage()}
      >
        Last
      </div>
    </div>
  );
}

export default Pagination;
